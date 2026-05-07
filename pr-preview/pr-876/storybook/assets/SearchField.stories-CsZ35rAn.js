import{r as m,f as l,j as t}from"./iframe-BNcGdhPn.js";import{S as d}from"./SearchField-Ceirlj0A.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-fhxwjy5A.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BPT-EsfX.js";import"./clsx-B-dksMZM.js";import"./Form-BiZUbCcr.js";import"./useFocusRing-Cu9nwss3.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./Input-Btp2H53i.js";import"./Hidden-D26ysej5.js";import"./Button-CSPLOvS6.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./FieldError-CFxnUxOD.js";import"./Text-Dc9-vgHL.js";import"./clsx-Ciqy0D92.js";import"./Text-CjSndq1s.js";import"./RSPContexts-DHoclz_N.js";import"./Group-Dtrx9Ex4.js";import"./useControlledState-BMDHyIEM.js";import"./useLocalizedStringFormatter-Boi35b_5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bp3odHt0.js";import"./useField-3oXs5MuB.js";import"./TextField.module-DdivwlC8.js";import"./search-DXWwGfR8.js";import"./createLucideIcon-CIzIYBm5.js";import"./x-Cn8Z5y6x.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./Button-BgPh4XDv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BrOw3xQL.js";import"./Collection-C1nt9JNW.js";import"./index-GhtlZNTq.js";import"./DragAndDrop-CN_XRCtO.js";import"./getScrollParent-Dxp0T4Mw.js";import"./scrollIntoView-DW5hP9Ho.js";import"./SelectionIndicator-C8uxE-m0.js";import"./SelectionManager-D9zlF73V.js";import"./useEvent-CU5jG29K.js";import"./useDescription-B3I2KEu4.js";import"./inertValue-UgyfMDTk.js";import"./useHighlightSelectionDescription-Dq1CW2zc.js";import"./useUpdateEffect-N3ZpADMd.js";import"./ListKeyboardDelegate-BUSiOdW7.js";import"./useHasTabbableChild-BVrIzOi6.js";import"./Checkbox-Dtxraftf.js";import"./check-B55JfsTc.js";import"./useToggleState-CnmwjxWl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
