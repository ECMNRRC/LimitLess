
# delete all files in output foulder
Get-ChildItem -Path dist -Include *.* -File -Recurse | foreach { $_.Delete() };

# build project
npx webpack --config webpack.config.js