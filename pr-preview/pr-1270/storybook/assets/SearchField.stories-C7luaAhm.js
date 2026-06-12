import{r as m,f as l,j as t}from"./iframe-D6gs3wS5.js";import{S as d}from"./SearchField-Q1PnpjdV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BOZA-8ix.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DJQYVgmX.js";import"./clsx-B-dksMZM.js";import"./Form-9Z_XXzsk.js";import"./useFocusRing-CFifySwi.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./Input-mOQPu2PR.js";import"./Hidden-Chxa0iBH.js";import"./Button-CbEqyxyu.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./FieldError-Bf6pWkxo.js";import"./Text-BlJm85ZR.js";import"./clsx-Ciqy0D92.js";import"./Text-DqH78Bzr.js";import"./RSPContexts-h4eiuWjg.js";import"./Group-CPeAu2W-.js";import"./useControlledState-CUa1KmDW.js";import"./useLocalizedStringFormatter-lMnXoQqL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbgRKsHa.js";import"./useField-D_VgcOBp.js";import"./TextField.module-DdivwlC8.js";import"./search-BGBIKs-8.js";import"./createLucideIcon-Cx44WpFS.js";import"./x-JmNjUnkH.js";import"./useLocalizedStringFormatter-CkggrktT.js";import"./Button-BVEXhnip.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DqFWHqpC.js";import"./Collection-BPj3IxkI.js";import"./index-MBhbw5TK.js";import"./DragAndDrop-aDUb-zHE.js";import"./getScrollParent-Do3-zmpB.js";import"./scrollIntoView-RTV5yabh.js";import"./SelectionIndicator-BbY2R1af.js";import"./SelectionManager-D39yDHWQ.js";import"./useEvent-BmTKd3HL.js";import"./useDescription-ChQWj-NI.js";import"./inertValue-DI4K6UR3.js";import"./useHighlightSelectionDescription-BswT5xaG.js";import"./useUpdateEffect-B1Ba2_Ek.js";import"./ListKeyboardDelegate-B-UkNWQd.js";import"./useHasTabbableChild-D3xj7MiI.js";import"./Checkbox-mNyRrkkc.js";import"./check-Cp-d3wef.js";import"./useToggleState-9Ois5ZbV.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
