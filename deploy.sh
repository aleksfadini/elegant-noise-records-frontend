#!/bin/bash

# Define variables
SOURCE_DIR="./out/"
DESTINATION_DIR="/home/public/"
SERVER="ssh.nyc1.nearlyfreespeech.net"
USERNAME="afadini_enrecords"

# Sync the 'out' directory with the server
rsync -avz -e "ssh" --delete $SOURCE_DIR $USERNAME@$SERVER:$DESTINATION_DIR

echo "Deployment complete."