import{r as m,f as l,j as t}from"./iframe-t17oHKP1.js";import{S as d}from"./SearchField-DIwN3mBo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Y528kLka.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-WfSaqPxO.js";import"./clsx-B-dksMZM.js";import"./Form-DCT3rcma.js";import"./useFocusRing-B8_h5nqb.js";import"./index-CGLwXwU8.js";import"./index-Vs6o5933.js";import"./Input-DvaOvy8x.js";import"./Hidden-XqahJ4vg.js";import"./Button-ofA_m75k.js";import"./useLabel-CVs4fZyR.js";import"./useLabels-Bv9txMFS.js";import"./useButton-CKC-NCyU.js";import"./FieldError-CjrPC_pn.js";import"./Text-B1toI6NE.js";import"./clsx-Ciqy0D92.js";import"./Text-BBzd2BqN.js";import"./RSPContexts-1krLgbtl.js";import"./Group-XT1qdx_4.js";import"./useControlledState-CSsGgKlE.js";import"./useLocalizedStringFormatter-BD3aVe4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-q8zM5BBj.js";import"./useField-BAqScliG.js";import"./TextField.module-DdivwlC8.js";import"./search-DXJsT6i2.js";import"./createLucideIcon-Bh202RVf.js";import"./x-B3d1tz_Z.js";import"./useLocalizedStringFormatter-B413oFZi.js";import"./Button-DBP_DFRF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CHb87xmq.js";import"./Collection-C_sAio25.js";import"./index-Bk8TkxO4.js";import"./DragAndDrop-C4E3063k.js";import"./getScrollParent-KRPDa9Jf.js";import"./scrollIntoView-CjKzLxJO.js";import"./SelectionIndicator-C3QJbXC7.js";import"./SelectionManager-B2XzSJwl.js";import"./useEvent-BXp6EVoR.js";import"./useDescription-DyoYJd2V.js";import"./inertValue-B_lDOBhu.js";import"./useHighlightSelectionDescription-ClPWXGG8.js";import"./useUpdateEffect-B9sfrpef.js";import"./ListKeyboardDelegate-CMyLAMym.js";import"./useHasTabbableChild-DCD3awMU.js";import"./Checkbox-Ca-19YBE.js";import"./check-BgXej_r8.js";import"./useToggleState-C3TVuh9i.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
