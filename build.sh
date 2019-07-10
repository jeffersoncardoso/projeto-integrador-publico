mkdir -p ./bin

folder=$(date +'%s%N')
scp -r ./ docker.dsv@vblxapd10:/tmp/$folder
ssh docker.dsv@vblxapd10 '
	docker cp /tmp/'"$folder"' node:/tmp/'"$folder"' &&
    docker exec -w /tmp/'"$folder"' node npm install
    docker exec -w /tmp/'"$folder"' node npm run build
    docker cp node:/tmp/'"$folder"'/dist /tmp/'"$folder"'
    docker exec node rm -rf /tmp/'"$folder"'
'

mkdir -p ./dist
scp -r docker.dsv@vblxapd10:/tmp/$folder/dist/ "./dist/"
mv ./dist/dist ./dist/public
ssh docker.dsv@vblxapd10 "rm -rf /tmp/$folder"
