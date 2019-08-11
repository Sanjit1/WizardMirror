echo 'Wizard Mirror'
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '
echo '                                                                               '






echo '...............................................................................'
echo 'Installing Node'

cd ~
wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz
tar -xzf node-v8.9.0-linux-armv6l.tar.gz
cd ~/node-v8.9.0-linux-armv6l/
sudo cp -R * /usr/local/


echo 'Downloading Wizard Mirror'

cd ~

wget -O WizardMirror.tar.gz https://www.github.com/Sanjit1/WizardMirror/archive/1.0.tar.gz

echo 'Downloaded'

mkdir WizardMirror

tar -xzf ~/WizardMirror.tar.gz -C WizardMirror --strip-components=1

cd WizardMirror

echo 'Installing Dependencies'

npm install

echo 'Installed'

xdg-open README.md

cd ~/WizardMirror
