pipeline {
    agent any
    
    tools {
        nodejs '21.6.1'
    }
    
    stages {
        stage('Pull from GitHub') {
            steps {
                script {
                    // Cloning the GitHub repository
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/rezalyonk/web-medfor.git']]])
                }
            }
        }
        
        stage('Testing') {
            steps {
                script {
                    // Running 'npm install' for testing
                    sh 'npm install'
                }
            }
        }

        stage('Push to GitLab') {
            steps {
                script {
                    // Pushing to the GitLab repository using GitLab credentials
                    withCredentials([usernamePassword(credentialsId: 'rezalyonk', passwordVariable: 'GITLAB_PASSWORD', usernameVariable: 'GITLAB_USERNAME')]) {
                        sh "git push https://${GITLAB_USERNAME}:${GITLAB_PASSWORD}@gitlab.com/rezalyonk/web-medfor.git HEAD:main"
                    }
                }
            }
        }
    }
}
