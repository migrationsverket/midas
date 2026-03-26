import{r as m,f as l,j as t}from"./iframe-76Zbcpfm.js";import{S as d}from"./SearchField-CSv6d7My.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-fx5dk8jM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKhtQhER.js";import"./clsx-B-dksMZM.js";import"./Form-CdmBZCXo.js";import"./useFocusRing--jUHa30l.js";import"./index-CYYDks4G.js";import"./index-Bikl_74K.js";import"./Input-BOXA6tbT.js";import"./Hidden-CtdbjR1M.js";import"./Button-CGIWV9qi.js";import"./useLabel-Dyg0KZIl.js";import"./useLabels-DGXzYi66.js";import"./useButton-FpSsaIPg.js";import"./FieldError-B3CXz0a8.js";import"./Text-BtsDHilU.js";import"./clsx-Ciqy0D92.js";import"./Text-BvHKVa0m.js";import"./RSPContexts-CAiLW-Ic.js";import"./Group-CR6mBLpN.js";import"./useControlledState-DdSN72zB.js";import"./useLocalizedStringFormatter-CaBWWaJn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3-x0MTG.js";import"./useField-BshCWbMs.js";import"./TextField.module-DdivwlC8.js";import"./search-UUvX77U-.js";import"./createLucideIcon-C-Fi2tn8.js";import"./x-Cpfzd3NA.js";import"./useLocalizedStringFormatter-CyEIBYX2.js";import"./Button-DDxQAl6w.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-r55FRtGJ.js";import"./Collection-Su8Sna0o.js";import"./index-BvVm8IC3.js";import"./DragAndDrop-DrLsloWL.js";import"./getScrollParent-CNZhp6tM.js";import"./scrollIntoView-B9jKnzlj.js";import"./SelectionIndicator-BrzQIpPF.js";import"./SelectionManager-qL0EJH9N.js";import"./useEvent-DXqjRKfs.js";import"./useDescription-Cz09nlnz.js";import"./inertValue-DT4cvrvZ.js";import"./useHighlightSelectionDescription-9woB_THj.js";import"./useUpdateEffect-4Tdm6_2z.js";import"./ListKeyboardDelegate-B5lh8Oqz.js";import"./useHasTabbableChild-DBnMeS-C.js";import"./Checkbox-DxECPF2j.js";import"./check-jcTrynaA.js";import"./useToggleState-HQ6xiKdT.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
