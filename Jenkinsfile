pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        GIT_CREDENTIALS_ID = 'CredentialAtelier' // Remplacez par l'ID de vos credentials Jenkins
    }
    /*triggers {
        cron('H/5 * * * *') // Planification pour exécuter toutes les 5 minutes
    }*/

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the 'dev' branch
                    checkout([$class: 'GitSCM', branches: [[name: '*/dev']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], submoduleCfg: [], 
                              userRemoteConfigs: [[credentialsId: env.GIT_CREDENTIALS_ID, url: 'https://github.com/FelicianoMandjam/AppLivreCorrection.git']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies for both frontend and backend
                    dir('FrontBibliotheque') {
                        sh 'npm install'
                    }
                    dir('BackBibliotheque') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests for both frontend and backend
                    dir('FrontBibliotheque') {
                        echo 'sur le front'
                        
                    }
                    dir('BackBibliotheque') {
                        echo 'sur le back'
                        sh 'npm test'
                    }
                }
            }
        }

        
    }

    
    post {
        success {
            script {
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], submoduleCfg: [], 
                              userRemoteConfigs: [[credentialsId: env.GIT_CREDENTIALS_ID, url: 'https://github.com/FelicianoMandjam/AppLivreCorrection.git']]])
                echo 'Tests succeeded, merging dev into main'
                    sh """
                        git config --global user.email "felicianomandja@gmail.com"
                        git config --global user.name "FelicianoMandjam"
                        git checkout main
                        git pull origin main
                        git merge origin/dev
                        git push https://github.com/FelicianoMandjam/AppLivreCorrection.git main
                    """
            }
        }
        failure {
            echo 'Tests failed, merge to main aborted.'
        }
        always {
            echo 'Cleaning up workspace'
            cleanWs()
        }
    }
}