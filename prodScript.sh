source /home/ubuntu/.nvm/nvm.sh;

cd /home/ubuntu/
pm2 delete coaches
rm -rf coaches
mkdir coaches
tar -xzvf prod.tar -C coaches
rm prod.tar
cd coaches
export PORT=8041
pm2 start --name coaches npm -- start