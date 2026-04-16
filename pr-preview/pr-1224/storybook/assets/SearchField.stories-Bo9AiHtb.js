import{r as m,f as l,j as t}from"./iframe-Cwp_nH2i.js";import{S as d}from"./SearchField-CNkqy3Kn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BQ9JhFl9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D58tzseF.js";import"./clsx-B-dksMZM.js";import"./Form-DM5Rvxjr.js";import"./useFocusRing-DNNGYKVr.js";import"./index-DyCqZMYr.js";import"./index-kB1ochzG.js";import"./Input-CAIXe99i.js";import"./Hidden-BUSQ_LLM.js";import"./Button-BYfq0wpH.js";import"./useLabel-D7lULVXa.js";import"./useLabels-cVarSgwU.js";import"./useButton-BNvE6ltl.js";import"./FieldError-DkJf33vr.js";import"./Text-h4_45G40.js";import"./clsx-Ciqy0D92.js";import"./Text-ooZ4PKli.js";import"./RSPContexts-BgIiqfY1.js";import"./Group-Bif-dsKf.js";import"./useControlledState-DjKqHFBe.js";import"./useLocalizedStringFormatter-C-PIG7PB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DpE7ZZyR.js";import"./useField-B_VPmbL6.js";import"./TextField.module-DdivwlC8.js";import"./search-DwBegIwi.js";import"./createLucideIcon-CL7AaBb9.js";import"./x-DV3Rl8a5.js";import"./useLocalizedStringFormatter-C82ZJvLt.js";import"./Button-D-SHIeik.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-c7FiOqp6.js";import"./Collection-CXC_OfZ3.js";import"./index-DbD20U-h.js";import"./DragAndDrop-CcvElk9v.js";import"./getScrollParent-CS9TKH4q.js";import"./scrollIntoView-BKCjK7iV.js";import"./SelectionIndicator-D_R3OtUk.js";import"./SelectionManager-BVnpLiio.js";import"./useEvent-BjIvz2Po.js";import"./useDescription-CryxMFSD.js";import"./inertValue-9h4ZBgIL.js";import"./useHighlightSelectionDescription-DDwQLdfn.js";import"./useUpdateEffect-m_tK5YKk.js";import"./ListKeyboardDelegate-p2Ps1sEj.js";import"./useHasTabbableChild-CQjgVjsS.js";import"./Checkbox-D9_fdJLh.js";import"./check-c0ZmnFlT.js";import"./useToggleState-CmVPGROy.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
