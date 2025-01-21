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
      children: [{ text: 'Report generated using VSME Standard' }],
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
              children: [{ text: '' }],
            },
            {
              type: TableCellPlugin.key,
              children: [{ text: '' }],
            },
            {
              type: TableCellPlugin.key,
              children: [{ text: '' }],
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
              children: [{ text: '' }],
            },
            {
              type: TableCellPlugin.key,
              children: [{ text: '' }],
            },
            {
              type: TableCellPlugin.key,
              children: [{ text: '' }],
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
              children: [{ text: 'Scope' }],
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
              children: [{ text: 'Scope 1' }],
            },
            {
              type: TableCellPlugin.key,
              children: [{ text: '' }],
            },
          ],
        },
        {
          type: TableRowPlugin.key,
          children: [
            {
              type: TableCellPlugin.key,
              children: [{ text: 'Scope 2 (Location-based)' }],
            },
            {
              type: TableCellPlugin.key,
              children: [{ text: '' }],
            },
          ],
        },
      ],
    },
  ];
