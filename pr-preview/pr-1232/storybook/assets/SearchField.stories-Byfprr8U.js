import{r as m,f as l,j as t}from"./iframe-Cu_fcUaC.js";import{S as d}from"./SearchField-DE7DbYRl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Y2aa88Jx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mLyOZ5qk.js";import"./clsx-B-dksMZM.js";import"./Form-Cpr59noW.js";import"./useFocusRing-Dsj_Rw-j.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./Input-DXT2_3F3.js";import"./Hidden-D1QpNxPu.js";import"./Button-BJB-9Zcd.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./FieldError-CcL3qzc2.js";import"./Text-BcWcM5HD.js";import"./clsx-Ciqy0D92.js";import"./Text-CJt2oElV.js";import"./RSPContexts-voJfQs_F.js";import"./Group-B_4MjRqC.js";import"./useControlledState-Cc2dWwpP.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D7XMH20H.js";import"./useField-Cl39vdxi.js";import"./TextField.module-DdivwlC8.js";import"./search-BY-rWnUi.js";import"./createLucideIcon-B_FH30vd.js";import"./x-_aLctjLl.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./Button-DbgphF2R.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bo9ouMME.js";import"./Collection-DgS7LPNV.js";import"./index-Bd3BSiq8.js";import"./DragAndDrop-LWqhxrUY.js";import"./getScrollParent-DEJhUy4G.js";import"./scrollIntoView-ACzs8MHU.js";import"./SelectionIndicator-B3i_o2a7.js";import"./SelectionManager-CrVTf4E_.js";import"./useEvent-CwEPxrZU.js";import"./useDescription-BXNyutV1.js";import"./inertValue-Ci6B5Lro.js";import"./useHighlightSelectionDescription-DZNau4tP.js";import"./useUpdateEffect-BBB-HEnP.js";import"./ListKeyboardDelegate-BaQ6if3w.js";import"./useHasTabbableChild-CCIMiXn9.js";import"./Checkbox-z3K_kshL.js";import"./check-BVAfz5sk.js";import"./useToggleState-CVKqooVN.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
