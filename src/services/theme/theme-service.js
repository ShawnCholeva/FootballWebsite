import teamData from './team-data.json';

class ThemeService {
    defaultColors = {
        'primary': '',
        'secondary': '#282E34'
    }

    teamData = {};
    teamInfo = null;
    constructor(){
        this.teamData = teamData;

        this.setTeamInfo();
    }

    setTeamInfo(){
        for(let i = 0; i < this.teamData.teams.length; i++){
            if(this.teamData.teams[i].name === localStorage.getItem('favTeam')){
                this.teamInfo = this.teamData.teams[i];
            }
        }
    }

    getTeamNames(){
        const teams = [];

        for(let i = 0; i < this.teamData.teams.length; i++){
            teams.push(this.teamData.teams[i].name);
        }

        return teams;
    }

    getTeamColors(){
        if(this.teamInfo) {
            return this.teamInfo.colors;
        } else {
            return this.defaultColors;
        }
    }

    addTeamThemeToElements(){
        this.setTeamInfo();
        this.handleMainPage();
    }

    handleNav(){
        this.replacePrimaryColors();
        this.replaceSecondaryColors();
    }

    handleMainPage(){
        //TODO: Use the redux store instead of local storage to get the user's favorite team name.
        const teamName = localStorage.getItem('favTeam');
        this.replaceHomeImages(teamName);
    }

    replaceHomeImages(teamName){
        if(teamName){
            const cols = document.getElementsByClassName('replaceable-image');

            for(let i=0; i<cols.length; i++) {
                cols[i].style.backgroundImage = `url("src/images/${teamName}/${teamName}_Home_${i + 1}.jpg")`;
                cols[i].style.opacity = '0.65';
            }
        }
    }

    replacePrimaryColors(){
        const cols = document.getElementsByClassName('replaceable-primary');
        for(let i=0; i<cols.length; i++) {
            cols[i].style.backgroundColor = this.teamInfo.colors.primary;
        }
    }

    replaceSecondaryColors(){
        // const cols = document.getElementsByClassName('replaceable-secondary');
        // console.log(cols);
        // for(let i=0; i<cols.length; i++) {
        //     cols[i].style.color = this.teamData.colors.secondary;
        // }
    }
}

const themeService = new ThemeService();
export default themeService;