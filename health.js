
      var  healthPackages =[
          {
            "id":"1",
            "packageName": "Basic Health Check",
            "cost": 4500,
            "gender": "All",
            "maxAge": 65
          },
          {
            
            "id":"2",
            "packageName": "Comprehensive Wellness Package",
            "cost": 9000,
            "gender": "All",
            "maxAge": 70
          },
          {
            
            "id":"3",
            "packageName": "Men's Preventive Package",
            "cost": 6000,
            "gender": "Male",
            "maxAge": 60
          },
          {
            
            "id":"4",
            "packageName": "Women's Preventive Package",
            "cost": 6000,
            "gender": "Female",
            "maxAge": 60
          },
          {
            
            "id":"5",
            "packageName": "Senior Health Check",
            "cost": 8000,
            "gender": "All",
            "maxAge": 85
          },
          {
            "id":"6",
            "packageName": "Allergy Testing Package",
            "cost": 5500,
            "gender": "All",
            "maxAge": 65
          },
          {
            
            "id":"7",
            "packageName": "Child Wellness Package",
            "cost": 3500,
            "gender": "All",
            "maxAge": 18
          },
          {
            
            "id":"8",
            "packageName": "Pregnancy Care Package",
            "cost": 1200,
            "gender": "Female",
            "maxAge": 45
          },
          {
            
            "id":"9",
            "packageName": "Heart Health Package",
            "cost": 7500,
            "gender": "All",
            "maxAge": 75
          },
          {
            
            "id":"10",
            "packageName": "Diabetes Management Package",
            "cost": 6500,
            "gender": "All",
            "maxAge": 70
          },
          {
            
            "id":"11",
            "packageName": "Sports Health Package",
            "cost": 5500,
            "gender": "All",
            "maxAge": 40
          },
          {
            
"id":"12",
            "packageName": "Stress Relief Package",
            "cost": 5000,
            "gender": "All",
            "maxAge": 65
          },
          {
            "id":"13",
            "packageName": "Vision Care Package",
            "cost": 4000,
            "gender": "All",
            "maxAge": 75
          },
          {
            "id":"14",
            "packageName": "Hearing Assessment Package",
            "cost": 4500,
            "gender": "All",
            "maxAge": 70
          },
          {
            "id":"15",
            "packageName": "Cancer Screening Package",
            "cost": 10000,
            "gender": "All",
            "maxAge": 80
          }
          
        ];

        var health_Packages = document.getElementById("package-content");

        for (let package of healthPackages) { 
            var packageContainer = document.createElement("div");
            packageContainer.className = "package-container";
            
            var package_img = document.createElement("img");
            package_img.src = "./Doctor.jpg";
        
            var package_name = document.createElement("p");
            package_name.textContent = package.packageName;
            
            var package_cost = document.createElement("p");
            package_cost.textContent = "Cost: " + package.cost;
        
            var package_gender = document.createElement("p");
            package_gender.textContent = "Gender: " + package.gender;
        
            var package_age = document.createElement("p");
            package_age.textContent = "Age: " + package.maxAge;
        
            var btn = document.createElement("button");
            btn.textContent = "Book Now";
        
            packageContainer.appendChild(package_img);
            packageContainer.appendChild(package_name);
            packageContainer.appendChild(package_cost);
            packageContainer.appendChild(package_gender);
            packageContainer.appendChild(package_age);
            packageContainer.appendChild(btn);
            packageContainer.classList.add("column");    
            health_Packages.appendChild(packageContainer);
        
            btn.addEventListener("click", function(){
                let queryParams = `?packageName=${encodeURIComponent(package.packageName)}&cost=${package.cost}&gender=${package.gender}&maxAge=${package.maxAge}`;
                
                window.location.href = 'contact.html' + queryParams;
            });
        }
        