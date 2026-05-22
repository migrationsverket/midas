import{r as m,f as l,j as t}from"./iframe-BjXy11IP.js";import{S as d}from"./SearchField-DkO3XdBm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ChRm_bGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj8sQgIn.js";import"./clsx-B-dksMZM.js";import"./Form-DuPSWePz.js";import"./useFocusRing-D20u5I3y.js";import"./index-BXFUTcBh.js";import"./index-BLEH-ht0.js";import"./Input-CFw_curM.js";import"./Hidden-B_bNI1dK.js";import"./Button-CwQmoSQG.js";import"./useLabel-1ZP1GF7v.js";import"./useLabels-ipnyo4k3.js";import"./useButton-CDDhm8mD.js";import"./FieldError-Bj299096.js";import"./Text-DM8Ihy_8.js";import"./clsx-Ciqy0D92.js";import"./Text-CXAF5biH.js";import"./RSPContexts-Dc6ISs8u.js";import"./Group-BOFuX5F4.js";import"./useControlledState-BFdO-Aas.js";import"./useLocalizedStringFormatter-2-idTql7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-oCc11dAG.js";import"./useField-C2clUNbs.js";import"./TextField.module-DdivwlC8.js";import"./search-DHYHH9Mt.js";import"./createLucideIcon-BrUYswYS.js";import"./x-CBMTJOuE.js";import"./useLocalizedStringFormatter-DylN3B8r.js";import"./Button-CaR7So5F.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B8YjGTUD.js";import"./Collection-Bmvuh_aD.js";import"./index-svh7ED_h.js";import"./DragAndDrop-CKDT693R.js";import"./getScrollParent-Cwho8gKu.js";import"./scrollIntoView-e8j4Q6hS.js";import"./SelectionIndicator-DnJhxFrg.js";import"./SelectionManager-MUVk0-Jq.js";import"./useEvent-BvN2BQGn.js";import"./useDescription-BaUF5NM6.js";import"./inertValue-CEYups2G.js";import"./useHighlightSelectionDescription-Dm88k9Ab.js";import"./useUpdateEffect-BW6Qqz_F.js";import"./ListKeyboardDelegate-Dlc0U7io.js";import"./useHasTabbableChild-BEOMrY7U.js";import"./Checkbox-C0FazZCi.js";import"./check-BHRcK2Fr.js";import"./useToggleState-CVBbsaXY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
