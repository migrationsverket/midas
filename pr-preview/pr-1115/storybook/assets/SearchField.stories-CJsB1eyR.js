import{r as m,f as l,j as t}from"./iframe-DU8NLsSw.js";import{S as d}from"./SearchField-B5kmOnGC.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CM0VWC8Q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DschNtJz.js";import"./clsx-B-dksMZM.js";import"./Form-BJkA6abG.js";import"./useFocusRing-BMKmF6E1.js";import"./index-C6itxEvf.js";import"./index-DDAOQfjR.js";import"./Input-CNSmefZp.js";import"./Hidden-DjBEVfsr.js";import"./Button-CLXNoy7Y.js";import"./useLabels-C6Oc5R34.js";import"./useButton-D62E3rKh.js";import"./FieldError-CwLWEdZN.js";import"./Text-BZqm9ELR.js";import"./clsx-Ciqy0D92.js";import"./Text-Dif5ls4o.js";import"./RSPContexts-B6N-eI9R.js";import"./Group-CcQiZC6c.js";import"./useControlledState-CI3nCHv5.js";import"./useLocalizedStringFormatter-Cj1K2IHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B-T7FBsf.js";import"./useField-sZihLE4Q.js";import"./TextField.module-DdivwlC8.js";import"./search-azhTNQWV.js";import"./createLucideIcon-24KtAMn6.js";import"./x-BTYP4-gW.js";import"./useLocalizedStringFormatter-CFXzQyxC.js";import"./Button-CMEO0cNM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CTGBozXG.js";import"./Collection-BFEtU6Zj.js";import"./index-DxE-xFtT.js";import"./DragAndDrop-Cc5fVlx6.js";import"./getScrollParent-vSGEZB_b.js";import"./scrollIntoView-D3YlmEdr.js";import"./SelectionIndicator-KRuxcBLn.js";import"./SelectionManager-D66mxQR-.js";import"./useEvent-DHKGnH5O.js";import"./useDescription-DHAJH0jb.js";import"./inertValue-Bq_F1LOT.js";import"./useHighlightSelectionDescription-zPXX9EQU.js";import"./useUpdateEffect-DV3LrtrP.js";import"./ListKeyboardDelegate-CpOAujDV.js";import"./useHasTabbableChild-C16SKGAB.js";import"./Checkbox-D5O4-T6Z.js";import"./check-BFzigZ7Z.js";import"./useToggleState-B_janxqB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
