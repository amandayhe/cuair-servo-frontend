d3.csv("data.csv", function(data) {
      console.log(data);

      const w = 30;
      const h = 15;

      var svgContainer = d3.select("body").append("svg").attr("width", 600)
        .attr("height", 600);

      data.forEach(function(d) {
          var rectangle = svgContainer.append("rect")
            .attr("x", d.x)
            .attr("y", d.y)
            .attr("width", d.width)
            .attr("height", d.height)
            .attr("fill", d.color);

          if (d.direction == "down") {
            var circle = svgContainer.append("line")
              .attr("x1", parseInt(d.x) + (parseInt(d.width) / 2))
              .attr("y1", parseInt(d.y) + parseInt(d.height))
              .attr("x2", parseInt(d.x2) + (parseInt(d.width) / 2))
              .attr("y2", d.y2)
              .attr("stroke-width", 1)
              .attr("stroke", "gray");

            var xpos1 = parseInt(d.x2) - (0.3 * w);
            var ypos1 = parseInt(d.y2);
            var xpos2 = parseInt(d.x2) - (0.3 * w);
            var ypos2 = parseInt(d.y2) + h
            var xpos3 = parseInt(d.x2) - (0.3 * w);
            var ypos3 = parseInt(d.y2) + (2 * h);
          }

          if (d.direction == "left") {
            var circle = svgContainer.append("line")
              .attr("x1", parseInt(d.x))
              .attr("y1", parseInt(d.y) + parseInt(d.height) / 2)
              .attr("x2", parseInt(d.x2) + (parseInt(d.width) / 2))
              .attr("y2", parseInt(d.y2) + parseInt(d.height) / 2)
              .attr("stroke-width", 1)
              .attr("stroke", "gray");

            var xpos1 = parseInt(d.x2) - (0.9*w);
            var ypos1 = parseInt(d.y2) - h;
            var xpos2 = parseInt(d.x2) - (0.9*w);
            var ypos2 = parseInt(d.y2);
            var xpos3 = parseInt(d.x2) - (0.9 * w);
            var ypos3 = parseInt(d.y2) + h;
            }

            if (d.direction == "right") {
              var circle = svgContainer.append("line")
                .attr("x1", parseInt(d.x)+parseInt(d.width))
                .attr("y1", parseInt(d.y) + parseInt(d.height) / 2)
                .attr("x2", parseInt(d.x2) + (parseInt(d.width) / 2))
                .attr("y2", parseInt(d.y2) + parseInt(d.height) / 2)
                .attr("stroke-width", 1)
                .attr("stroke", "gray");

              var xpos1 = parseInt(d.x2);
              var ypos1 = parseInt(d.y2) - h;
              var xpos2 = parseInt(d.x2);
              var ypos2 = parseInt(d.y2);
              var xpos3 = parseInt(d.x2);
              var ypos3 = parseInt(d.y2) + h;
            }
            svgContainer.append("rect")
              .attr("x", xpos1)
              .attr("y", ypos1)
              .attr("width", w)
              .attr("height", h)
              .attr("fill", d.datacolor);
              // .attr("stroke", d.bordercolor);
              // .attr("stroke-width", 1);
            svgContainer.append("text")
              .attr("x", xpos1 + 1)
              .attr("y", ypos1 + h / 1.3)
              .attr("class", "data")
              .text(d.min);

            svgContainer.append("rect")
              .attr("x", xpos2)
              .attr("y", ypos2)
              .attr("width", w)
              .attr("height", h)
              .attr("fill", d.datacolor);
            svgContainer.append("text")
              .attr("x", xpos2 + 1)
              .attr("y", ypos2 + h / 1.3)
              .attr("class", "data")
              .text(d.trim);

            svgContainer.append("rect")
              .attr("x", xpos3)
              .attr("y", ypos3)
              .attr("width", w)
              .attr("height", h)
              .attr("fill", d.datacolor);
            svgContainer.append("text")
              .attr("x", xpos3 + 1)
              .attr("y", ypos3 + h / 1.3)
              .attr("class", "data")
              .text(d.max);
          });
      });
