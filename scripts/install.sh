echo 'Wizard Mirror'

echo ''
echo '_______________________________________________________________________________'
echo '                                                                               '

echo '                           ,---.'
echo '                          /    |'
echo '                         /     |'
echo '                        /      |'
echo '                       /       |'
echo '                  ___,'"'"'        |'
echo '                <  -'"'"'          :'
echo '                 `-.__..--'"'"'``-,_\'
echo '                    |o/ <o>` :,.)_`>'
echo '                    :/ `     ||/)'
echo '                    (_.).__,-` |\'
echo '                    /( `.``   `| :'
echo '                    \'"'"'`-.)  `  ; ;'
echo '                    | `       /-<'
echo '                    |     `  /   `.'
echo '    ,-_-..____     /|  `    :__..-'"'"'\'
echo '   /,'"'"'-.__\\  ``-./ :`      ;       \'
echo '   `\ `\  `\\  \ :  (   `  /  ,   `. \'
echo '     \` \   \\   |  | `   :  :     .\ \'
echo '      \ `\_  ))  :  ;     |  |      ): :'
echo '     (`-.-'"'"'\ ||  |\ \   ` ;  ;       | |'
echo '      \-_   `;;._   ( `  /  /_       | |'
echo '       `-.-.// ,'"'"'`-._\__/_,'"'"'         ; |'
echo '          \:: :     /     `     ,   /  |'
echo '           || |    (        ,'"'"' /   /   |'
echo '           ||                ,'"'"'   /    |'

echo ''
echo '_______________________________________________________________________________'
echo '                                                                               '


echo '             _________ _______  _______  _______  ______  '
echo '    |\     /|\__   __// ___   )(  ___  )(  ____ )(  __  \ '
echo '    | )   ( |   ) (   \/   )  || (   ) || (    )|| (  \  )'
echo '    | | _ | |   | |       /   )| (___) || (____)|| |   ) |'
echo '    | |( )| |   | |      /   / |  ___  ||     __)| |   | |'
echo '    | || || |   | |     /   /  | (   ) || (\ (   | |   ) |'
echo '    | () () |___) (___ /   (_/\| )   ( || ) \ \__| (__/  )'
echo '    (_______)\_______/(_______/|/     \||/   \__/(______/ '

echo ''
echo '_______________________________________________________________________________'
echo ''

echo '     _______ _________ _______  _______  _______  _______ '
echo '    (       )\__   __/(  ____ )(  ____ )(  ___  )(  ____ )'
echo '    | () () |   ) (   | (    )|| (    )|| (   ) || (    )|'
echo '    | || || |   | |   | (____)|| (____)|| |   | || (____)|'
echo '    | |(_)| |   | |   |     __)|     __)| |   | ||     __)'
echo '    | |   | |   | |   | (\ (   | (\ (   | |   | || (\ (   '
echo '    | )   ( |___) (___| ) \ \__| ) \ \__| (___) || ) \ \__'
echo '    |/     \|\_______/|/   \__/|/   \__/(_______)|/   \__/'
                                                      
echo ''
echo '______________________________________________________________________________'
echo ''

echo 'Installing Node'
echo '______________________________________________________________________________'
echo ''

cd ~

echo 'Downloading node distribrution'
wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz
echo 'Unzipping'
tar -xzf node-v8.9.0-linux-armv6l.tar.gz
cd ~/node-v8.9.0-linux-armv6l/
echo 'Setting up node'
sudo cp -R * /usr/local/
cd ~
echo 'Node Zip no longer needed. Deleting Zip file'

rm node-v8.9.0-linux-armv6l.tar.gz


echo 'Downloading Wizard Mirror'
echo '______________________________________________________________________________'
echo ''

cd ~

git clone https://github.com/Sanjit1/WizardMirror

cd WizardMirror

echo 'Installing Dependencies'
echo '______________________________________________________________________________'
echo ''

npm install

npm install electron --save

echo 'Installed'
echo '______________________________________________________________________________'
echo ''

echo 'Renaming appsSample.json'

cp appsSample.json apps.json

echo 'Opening Apps.json'

xdg-open apps.json

echo 'Opening Readme'

xdg-open README.md