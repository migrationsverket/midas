import{r as m,f as l,j as t}from"./iframe-D6LQdl6O.js";import{S as d}from"./SearchField-BlndwHUQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-0GdVWA6U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZfNivSw.js";import"./clsx-B-dksMZM.js";import"./Form-DJN2nlTm.js";import"./useFocusRing-BDbVtPGE.js";import"./index-DPCjDfDX.js";import"./index-DlVk54G_.js";import"./Input-Cmu-G9wA.js";import"./Hidden-yz3dW65o.js";import"./Button-9qwLQrmH.js";import"./useLabel-B512jCzb.js";import"./useLabels-CAs9k4GA.js";import"./useButton-CQHMF8NW.js";import"./FieldError-D0W-ZueW.js";import"./Text-CwW63OZO.js";import"./clsx-Ciqy0D92.js";import"./Text-RYp74C2J.js";import"./RSPContexts-wImFRte6.js";import"./Group-CxixKFtH.js";import"./useControlledState-FXE_mKkD.js";import"./useLocalizedStringFormatter-iIj43R9v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C5294WGM.js";import"./useField-D9v9VApI.js";import"./TextField.module-DdivwlC8.js";import"./search-CeSqT--4.js";import"./createLucideIcon-kgcsXuQA.js";import"./x-CNFfLLin.js";import"./useLocalizedStringFormatter-rG6cuzBW.js";import"./Button-BVWIHAUA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cd1-ui_g.js";import"./Collection-LO6NxUTl.js";import"./index-Dp2YHi41.js";import"./DragAndDrop-CZUxiZm6.js";import"./getScrollParent-c0trNJuS.js";import"./scrollIntoView-DobeBV9b.js";import"./SelectionIndicator-Dj8nmkfr.js";import"./SelectionManager-xlGPflp-.js";import"./useEvent-CZkNrFIT.js";import"./useDescription-Dsci8nVE.js";import"./inertValue-DaOB47hh.js";import"./useHighlightSelectionDescription-CB28Ettz.js";import"./useUpdateEffect-Dq4UlUH9.js";import"./ListKeyboardDelegate-OVGwDV0D.js";import"./useHasTabbableChild-8xOA84oY.js";import"./Checkbox-CQAWWXmJ.js";import"./check-COTF4HvK.js";import"./useToggleState-C1b9J6ra.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
