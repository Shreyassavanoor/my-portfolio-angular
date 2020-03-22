import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit, OnChanges {
    @Input() skills: any;
    @ViewChild('skills') private chartContainer: ElementRef;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges() {
        if (this.skills && this.skills.length > 0) {
            this.generateSkillsGraph();
        }
    }


    generateSkillsGraph() {
        d3.select('svg').remove();
        let chartElement = this.chartContainer.nativeElement;
        // set the dimensions and margins of the graph

        //for mobile make x-axis text vertical and define margin based on that
        let margin;
        let mobileView = false;
        if (window.innerWidth <= 1024) {
            mobileView = true;
            margin = { top: 20, right: 20, bottom: 150, left: 70 };
        } else {
            margin = { top: 20, right: 20, bottom: 30, left: 70 };
        }

        let width = chartElement.offsetWidth - margin.left - margin.right;
        let height = chartElement.offsetHeight - margin.top - margin.bottom;

        // set the ranges
        var x = d3.scaleBand()
            .padding(0.2)
            .range([0, width]);

        var y = d3.scaleLinear()
            .range([height, 0]);


        // append the svg object to the body of the page
        // append a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select(chartElement).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Scale the range of the data in the domains
        x.domain(this.skills.map(function (d) { return d.name; }));
        y.domain([0, d3.max(this.skills, function (d) { return d['rating'] as number; })]);

        // append the rectangles for the bar chart
        svg.selectAll(".bar")
            .data(this.skills)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d['name']); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d['rating']); })
            .attr("height", function (d) { return height - y(d['rating']); });

        svg.selectAll("text.bar-text")
            .data(this.skills)
            .enter()
            .append("text")
            .attr("class", "bar-text")
            .attr("x", function (d) { return x(d['name']) + x.bandwidth()/2 ;})
            .attr("y", function (d) { return y(d['rating']) - 8; })
            .text(function (d) { return d['rating']; })
            .attr("text-anchor", "middle");

        // add the x Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        if (mobileView) {
            svg.selectAll("text:not(.bar-text)")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(90)")
                .style("text-anchor", "start");
        }

        //add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));

        // text label for the y axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Self Rating (0-10)")
            .attr("class", "yAxisLabel");
    }

    resize() {
        this.generateSkillsGraph();
    }
}
