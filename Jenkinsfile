pipeline {
    agent any
    
    stages {
        stage('Pull from GitHub') {
            steps {
                script {
                    // Clone the repository from GitHub
                    git 'https://github.com/rezalyonk/web-medfor.git'
                }
            }
        }
        
        stage('Testing') {
            steps {
                script {
                    // Navigate to the cloned repository directory
                    dir('web-medfor') {
                        // Run 'npm install' for testing
                        sh 'npm install'
                    }
                }
            }
        }
        
        stage('Push to GitHub') {
            steps {
                script {
                    // Commit and push changes to the new repository
                    git 'https://github.com/rezalyonk/testing-deploy.git'
                    sh 'git add .'
                    sh 'git commit -m "Testing deploy"'
                    sh 'git push origin master'
                }
            }
        }
    }
}
