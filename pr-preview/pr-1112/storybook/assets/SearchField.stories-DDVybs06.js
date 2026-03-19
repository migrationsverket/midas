import{r as m,f as l,j as t}from"./iframe-C9WX87J6.js";import{S as d}from"./SearchField-CXIky1aU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bz27ij23.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-WPpV5jWl.js";import"./clsx-B-dksMZM.js";import"./Form-CrDGPGDU.js";import"./useFocusRing-CAXYS_HG.js";import"./index-CHnbLAYQ.js";import"./index-La7aNuBH.js";import"./Input-DInRldIR.js";import"./Hidden-CEJtjfct.js";import"./Button-Bu5uxYhh.js";import"./useLabels-DgR_9Kxw.js";import"./useButton-CpsvKUvy.js";import"./FieldError-BMuqq62L.js";import"./Text-BCCgd_b8.js";import"./clsx-Ciqy0D92.js";import"./Text-BtCJyYmU.js";import"./RSPContexts-DpKSKp3G.js";import"./Group-WJ_ukR0V.js";import"./useControlledState-fvtCyn4a.js";import"./useLocalizedStringFormatter-D1_2bmqB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D-ryzgE-.js";import"./useField-CaDFVgqd.js";import"./TextField.module-DdivwlC8.js";import"./search-DCUPlTnb.js";import"./createLucideIcon-LB-mxs_a.js";import"./x-BtWXvI6-.js";import"./useLocalizedStringFormatter-zypQ79BF.js";import"./Button-CB3oN7z-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C27kR6LN.js";import"./Collection-Bua-hp0H.js";import"./index-zTUZP3np.js";import"./DragAndDrop-CsLWMYX0.js";import"./getScrollParent-CXN1jHN8.js";import"./scrollIntoView-BvPcFHyF.js";import"./SelectionIndicator-DMa2A1w6.js";import"./SelectionManager-DAfe-HwK.js";import"./useEvent-CwKYR3g8.js";import"./useDescription-DSJqKme2.js";import"./inertValue-beOGWcXP.js";import"./useHighlightSelectionDescription-D5oqO1gG.js";import"./useUpdateEffect-DXTPgOIy.js";import"./ListKeyboardDelegate-BkqDl2Q0.js";import"./useHasTabbableChild-DKA5Z6pw.js";import"./Checkbox-DVVoaF2s.js";import"./check-D-Kq0jqj.js";import"./useToggleState-Bxsu7LWD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
