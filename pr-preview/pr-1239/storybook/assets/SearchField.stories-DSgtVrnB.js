import{r as m,f as l,j as t}from"./iframe-DYtTLEOY.js";import{S as d}from"./SearchField-CMNO9DBM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-w0L_5pSn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BeWuc0kB.js";import"./clsx-B-dksMZM.js";import"./Form-yvOI9qEP.js";import"./useFocusRing-_bdLe-pi.js";import"./index-CHX39vrh.js";import"./index-DvTVW4UW.js";import"./Input-C_TafsML.js";import"./Hidden-DDsbX8hq.js";import"./Button-DsqyYrvI.js";import"./useLabel-BnXeWK3Y.js";import"./useLabels-CT9q7uAF.js";import"./useButton-Ci3u1E4N.js";import"./FieldError-f6hy05Az.js";import"./Text-B_xqvba2.js";import"./clsx-Ciqy0D92.js";import"./Text-DW1CAqib.js";import"./RSPContexts-DkdKWqA8.js";import"./Group-DLwVJwa_.js";import"./useControlledState-rzHF_sGy.js";import"./useLocalizedStringFormatter-Ccy2SGCc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ByTnTJ3e.js";import"./useField-CBfES0O1.js";import"./TextField.module-DdivwlC8.js";import"./search-FRLVvMD-.js";import"./createLucideIcon-CX9lPY5s.js";import"./x-hiiCX7eS.js";import"./useLocalizedStringFormatter-CJKDlra2.js";import"./Button-NK277Tyq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-bhNQHOWS.js";import"./Collection-CvrhsRx1.js";import"./index--9prz91y.js";import"./DragAndDrop-7_uaqlJ8.js";import"./getScrollParent-WmdaZx3q.js";import"./scrollIntoView-C6xwA0wp.js";import"./SelectionIndicator-DGG2_PbU.js";import"./SelectionManager-DxV3yXAd.js";import"./useEvent-B1ZGd9Sm.js";import"./useDescription-Cyk80vV4.js";import"./inertValue-DcLwyDw0.js";import"./useHighlightSelectionDescription-D3OhIrE9.js";import"./useUpdateEffect-D-9djtEr.js";import"./ListKeyboardDelegate-7IzE9sWp.js";import"./useHasTabbableChild-CoKWT4DI.js";import"./Checkbox-C-iH53J-.js";import"./check-CMF1RO5N.js";import"./useToggleState-C-N3Thrp.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
