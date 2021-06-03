		$(document).ready(function()
		{
			
			GetUsers();
			GetUser();
		});

		function GetUser()
		{
			$.ajax({
				url:'https://reqres.in/api/users?page=2',
				type: "GET",
				dataType: 'json',
				success: function(data){
					console.log(data);

					$.each(data.data, function(index,item){
						var item=item;
						var Id= item.id;
						var Email=item.email;
						var FirstName=item.first_name;
						var LastName=item.last_name;
						var Avatar=item.avatar;

						var row='<tr><td style="vertical-align:middle">'+Id+'</td><td style="vertical-align:middle">'+FirstName+'</td><td style="vertical-align:middle">'+LastName+'</td><td style="vertical-align:middle">'+Email+'</td><td style="vertical-align:middle"><img src="'+Avatar+'"></td></tr>';
						$("#tbl").append(row);
					});
				}
			});
		}

				function GetUsers()
		{
			$.ajax({
				url:'https://reqres.in/api/users?page=1',
				type: "GET",
				dataType: 'json',
				success: function(data){
					console.log(data);

					$.each(data.data, function(index,item){
						var item=item;
						var Id= item.id;
						var Email=item.email;
						var FirstName=item.first_name;
						var LastName=item.last_name;
						var Avatar=item.avatar;

						var row='<tr><td style="vertical-align:middle">'+Id+'</td><td style="vertical-align:middle">'+FirstName+'</td><td style="vertical-align:middle">'+LastName+'</td><td style="vertical-align:middle">'+Email+'</td><td style="vertical-align:middle"><img src="'+Avatar+'"></td></tr>';
						$("#tbl").append(row);
					});
				}
			});
		}

