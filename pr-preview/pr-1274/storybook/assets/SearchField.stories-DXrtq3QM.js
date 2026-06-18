import{r as m,f as l,j as t}from"./iframe-BrwpvQHc.js";import{S as d}from"./SearchField-BOkthLDh.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DKtbZi6_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BACMs3jS.js";import"./clsx-B-dksMZM.js";import"./Form-QTUFbTxy.js";import"./useFocusRing-ay8XrwpJ.js";import"./index-e4zmhYiJ.js";import"./index-CfMCfkTD.js";import"./Input-CqxWm35E.js";import"./Hidden-62uiVpgl.js";import"./Button-CyBHSIdo.js";import"./useLabel-1zqhq5YX.js";import"./useLabels-D7FAWWUV.js";import"./useButton-DKTae0i9.js";import"./FieldError-Bn-kD1g2.js";import"./Text-Cp5vE00Z.js";import"./clsx-Ciqy0D92.js";import"./Text-B8xII3uk.js";import"./RSPContexts-LKuPHdSI.js";import"./Group-EsSCRkvs.js";import"./useControlledState-BuArS6Zg.js";import"./useLocalizedStringFormatter-CkzWLLcE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CtISlFAN.js";import"./useField-BfH21yjI.js";import"./TextField.module-DdivwlC8.js";import"./search-CcjFmNP9.js";import"./createLucideIcon-DL41wzn8.js";import"./x-C3Fvjogf.js";import"./useLocalizedStringFormatter-V2VPiIBS.js";import"./Button-BhMRkAV6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DRJAfVxE.js";import"./Collection-CUm3w3hw.js";import"./index-DSeJmrPr.js";import"./DragAndDrop-Cs7ZMku6.js";import"./getScrollParent-CBxp-l9V.js";import"./scrollIntoView-CyZOtQhj.js";import"./SelectionIndicator-DAEZu0n9.js";import"./SelectionManager-CMlb0qO7.js";import"./useEvent-D8YMy7IN.js";import"./useDescription-DfwBnCrb.js";import"./inertValue-DGw6stBA.js";import"./useHighlightSelectionDescription-PJtNWs76.js";import"./useUpdateEffect-Ds1l6VL6.js";import"./ListKeyboardDelegate-qi1TIQEk.js";import"./useHasTabbableChild-DVcpTqmK.js";import"./Checkbox-YATLs-PX.js";import"./check-Bz3NGLbI.js";import"./useToggleState-Sd5rYrX_.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
