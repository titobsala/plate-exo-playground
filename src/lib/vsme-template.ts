import {
  TablePlugin,
  TableRowPlugin,
  TableCellPlugin,
  TableCellHeaderPlugin,
} from '@udecode/plate-table/react';
import { ParagraphPlugin } from '@udecode/plate/react';

export const vsmeTemplate = [
  {
    type: 'h1',
    children: [{ text: 'VSME Basic Module Report' }],
  },
  {
    type: ParagraphPlugin.key,
    children: [{ text: 'Report generated using VSME Standard escreva aqui uma introdução da sua empresa: fale por exemplo do objetivo do relatorio, da historia da empresa e por ai vai' }],
  },
  // B1 - Basis for preparation
  {
    type: 'h2',
    children: [{ text: 'B1 - Basis for preparation' }],
  },
  {
    type: TablePlugin.key,
    children: [
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Information Type' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Value' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Legal Form' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Private Limited Company' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'NACE Code' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'C10.71 - Manufacture of bread and fresh pastry goods' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Balance Sheet (EUR)' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '4,850,000' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Turnover (EUR)' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '9,500,000' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Number of Employees' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '45' }],
          },
        ],
      },
    ],
  },
  // B2 - Practices and Policies
  {
    type: 'h2',
    children: [{ text: 'B2 - Practices, policies and future initiatives' }],
  },
  {
    type: TablePlugin.key,
    children: [
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Sustainability Issue' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Existing practices/policies?' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Publicly available?' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Has targets?' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Climate Change' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Energy efficiency program in place' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Yes' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Yes - 20% reduction by 2025' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Pollution' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Waste management policy' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'No' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'No' }],
          },
        ],
      },
    ],
  },
  // B3 - Energy and GHG emissions
  {
    type: 'h2',
    children: [{ text: 'B3 - Energy and greenhouse gas emissions' }],
  },
  {
    type: 'h3',
    children: [{ text: 'Energy Consumption (MWh)' }],
  },
  {
    type: TablePlugin.key,
    children: [
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: '' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Renewable' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Non-renewable' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Total' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Electricity' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '300' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '700' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '1,000' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Fuels' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '50' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '450' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '500' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Total' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '350' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '1,150' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '1,500' }],
          },
        ],
      },
    ],
  },
  {
    type: 'h3',
    children: [{ text: 'GHG Emissions (tCO2eq)' }],
  },
  {
    type: TablePlugin.key,
    children: [
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Emission Type' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Value' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Scope 1 GHG emissions' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '125' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Scope 2 GHG emissions (location-based)' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '450' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'GHG Intensity (tCO2eq/EUR million)' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '60.5' }],
          },
        ],
      },
    ],
  },
  // B4 - Pollution
  {
    type: 'h2',
    children: [{ text: 'B4 - Pollution of air, water and soil' }],
  },
  {
    type: TablePlugin.key,
    children: [
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Pollutant' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Emissions (kg)' }],
          },
          {
            type: TableCellHeaderPlugin.key,
            children: [{ text: 'Medium of release' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'NOx' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '850' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Air' }],
          },
        ],
      },
      {
        type: TableRowPlugin.key,
        children: [
          {
            type: TableCellPlugin.key,
            children: [{ text: 'SOx' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: '420' }],
          },
          {
            type: TableCellPlugin.key,
            children: [{ text: 'Air' }],
          },
        ],
      },
    ],
  },
];