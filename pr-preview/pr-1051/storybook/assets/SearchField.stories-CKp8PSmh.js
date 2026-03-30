import{r as m,f as l,j as t}from"./iframe-BkUM7oEP.js";import{S as d}from"./SearchField-ByxoquAv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BpPG-0gt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DWoj52PP.js";import"./clsx-B-dksMZM.js";import"./Form-BfR1VJr9.js";import"./useFocusRing-CU5ndcID.js";import"./index-Db2I9cuy.js";import"./index-BL6dPHEM.js";import"./Input-BAJDYTvn.js";import"./Hidden-iTXT5-p2.js";import"./Button-UyuoNVOf.js";import"./useLabel-Digs7FVA.js";import"./useLabels-DJtxT6T3.js";import"./useButton-y66OoghU.js";import"./FieldError-01Ml0ka5.js";import"./Text-ClKfHAct.js";import"./clsx-Ciqy0D92.js";import"./Text-pLibJUKD.js";import"./RSPContexts--U7gqoYU.js";import"./Group-CHV-O5HZ.js";import"./useControlledState-BozTthf5.js";import"./useLocalizedStringFormatter-DeI5I3jv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DELSi7lm.js";import"./useField-BtMr3my9.js";import"./TextField.module-DdivwlC8.js";import"./search-8NGa1FVc.js";import"./createLucideIcon-tb5hO106.js";import"./x-69nCWHEw.js";import"./useLocalizedStringFormatter-B4MD3dHV.js";import"./Button-aQxjv1sN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-eByAjNhP.js";import"./Collection-_eYgYWgZ.js";import"./index-DJIGBTlK.js";import"./DragAndDrop-CgY8Dsau.js";import"./getScrollParent-DKWwh6Kx.js";import"./scrollIntoView-D6PMwzyg.js";import"./SelectionIndicator-DxzNcjr0.js";import"./SelectionManager-ozZHd2bM.js";import"./useEvent-BugpiwQQ.js";import"./useDescription-DAIDaPzO.js";import"./inertValue-BZkihlTZ.js";import"./useHighlightSelectionDescription-COyP9bhB.js";import"./useUpdateEffect-CIIFjeS9.js";import"./ListKeyboardDelegate-VCFxA376.js";import"./useHasTabbableChild-DEidv2gN.js";import"./Checkbox-CFhKGnnV.js";import"./check-g1TkqrGf.js";import"./useToggleState-D95qaSc0.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
