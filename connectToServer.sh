#!/bin/bash

# Define variables
SOURCE_DIR="./out/"
DESTINATION_DIR="/home/public/"
SERVER="ssh.nyc1.nearlyfreespeech.net"
USERNAME="afadini_enrecords"

# Sync the 'out' directory with the server
ssh $USERNAME@$SERVER
