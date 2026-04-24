import{r as m,f as l,j as t}from"./iframe-b0nZhEJS.js";import{S as d}from"./SearchField-CVMUS-oM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DHyTGLIa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Czy4cRiY.js";import"./clsx-B-dksMZM.js";import"./Form-BYDskUyn.js";import"./useFocusRing-CFZ-IXl8.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./Input-Cdwbflk7.js";import"./Hidden-CZ6waCzP.js";import"./Button-W8LmO0wX.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./FieldError-CFDpOADY.js";import"./Text-CKTyuYl3.js";import"./clsx-Ciqy0D92.js";import"./Text-PpOivcva.js";import"./RSPContexts-BwF7V3QB.js";import"./Group-DtLMGfSw.js";import"./useControlledState-s-wNeubv.js";import"./useLocalizedStringFormatter-C8ETTJnR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BenCDeqQ.js";import"./useField-Bee8Za-k.js";import"./TextField.module-DdivwlC8.js";import"./search-4gyiFNCD.js";import"./createLucideIcon-t4UVlQbW.js";import"./x-BKNFSSsH.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./Button-BHZxE8mE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BU0juR5g.js";import"./Collection-DnjoQvxt.js";import"./index-D6FvMNA4.js";import"./DragAndDrop-DwE6qnlO.js";import"./getScrollParent-C1OYKDte.js";import"./scrollIntoView-BA0MjwzP.js";import"./SelectionIndicator-B6azs_Wj.js";import"./SelectionManager-_cFQFdJX.js";import"./useEvent-D9RmNfeT.js";import"./useDescription-CGMez1fw.js";import"./inertValue-DV0WTJTV.js";import"./useHighlightSelectionDescription-xmtTXEou.js";import"./useUpdateEffect-RoMvZwP5.js";import"./ListKeyboardDelegate-Z109lLwT.js";import"./useHasTabbableChild-BkJL5c95.js";import"./Checkbox-CbqlCbr8.js";import"./check-BG4OFa83.js";import"./useToggleState-DursVYwC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
