echo 'Wizard Mirror'
echo ''
echo '...............................................................................'
echo ''
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








echo '   __            __                                                            '
echo '  |   \        /   |                                                           '
echo '  | |\ \      / /| |      /                                                    '
echo '  | | \ \    / / | |     /                                                     '
echo '  | |  \ \  / /  | |    /                                                      '
echo '  | |   \ \/ /   | |   /                                                       '
echo '  |_|    \__/    |_|  /                                                        '
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


echo 'Downloading Magic Mirror'

cd ~

wget -O MagicMirror.tar.gz https://www.github.com/Sanjit1/MagicMirror/archive/1.0.tar.gz

echo 'Downloaded'

mkdir MagicMirror

tar -xzf ~/MagicMirror.tar.gz -C MagicMirror --strip-components=1

cd MagicMirror

echo 'Installing Dependencies'

npm install

echo 'Installed'

xdg-open README.md

cd ~/MagicMirror




cecho(){
    RED="\033[0;31m"
    GREEN="\033[0;32m"
    YELLOW="\033[1;33m"
    # ... ADD MORE COLORS
    NC="\033[0m" # No Color

    printf "${!1}${2} ${NC}\n"
}