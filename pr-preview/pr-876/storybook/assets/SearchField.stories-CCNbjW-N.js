import{r as m,f as l,j as t}from"./iframe-u1Lp3cWH.js";import{S as d}from"./SearchField-DCq2JOLR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-uXEnAN32.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Gcf78cCr.js";import"./clsx-B-dksMZM.js";import"./Form-D4DocfVX.js";import"./useFocusRing-Bt9lRSbz.js";import"./index-vqf3vopk.js";import"./index-CV03FtcW.js";import"./Input-BPY-OfvJ.js";import"./Hidden-C90fOqUW.js";import"./Button-YBWgb3jY.js";import"./useLabel-CfQyR9Ip.js";import"./useLabels-XR_-vmuV.js";import"./useButton-CJlrbFFl.js";import"./FieldError-D-oYDuTv.js";import"./Text-DNrFEZpf.js";import"./clsx-Ciqy0D92.js";import"./Text-slIPEHAS.js";import"./RSPContexts-DkuerkqF.js";import"./Group-D9LK4iRd.js";import"./useControlledState-Dq3PeISU.js";import"./useLocalizedStringFormatter-BuqYPbAV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D94UlNAr.js";import"./useField-Dk69aVnb.js";import"./TextField.module-DdivwlC8.js";import"./search-DGjL29lq.js";import"./createLucideIcon-DswZ9rJ-.js";import"./x-BwlYKxxl.js";import"./useLocalizedStringFormatter-9sVAI35M.js";import"./Button-CeEdTiGh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7l7xynE.js";import"./Collection-ScDJmlrl.js";import"./index-Y44MDtrN.js";import"./DragAndDrop-DxTMSuiI.js";import"./getScrollParent-dU7UAF5-.js";import"./scrollIntoView-i7bgZAzR.js";import"./SelectionIndicator-CxRRdMcp.js";import"./SelectionManager-BfSBhsyy.js";import"./useEvent-Bs3S41aN.js";import"./useDescription-2tob2pF0.js";import"./inertValue-CFt032H6.js";import"./useHighlightSelectionDescription-B1Dzd-4J.js";import"./useUpdateEffect-DdPRK9oc.js";import"./ListKeyboardDelegate-DiyRSclW.js";import"./useHasTabbableChild-HKvWctr6.js";import"./Checkbox-C0Fv-s_b.js";import"./check-jP9ITP5y.js";import"./useToggleState-DybUQTsK.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
