from rest_framework.response import Response
from rest_framework.decorators import api_view
from models import Corder
from .serializers import CorderSerializer
from rest_framework import status

@api_view(['GET'])
def getData(request):
    corders = Corder.objects.all()
    serializer = CorderSerializer(corders, many=True)
    return Response({'msg': 'Order Transactions', 'data': serializer.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
def addData(request):
    serializer = CorderSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)