import{r as m,f as l,j as t}from"./iframe-upcgl7eM.js";import{S as d}from"./SearchField-r6M2Twwd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-iWZA_R-z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DxbIPEYQ.js";import"./utils-DIx1IamT.js";import"./useLocalizedStringFormatter-B_89sXt0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0go8Gbu.js";import"./useFocusRing-BqsA1vx-.js";import"./index-BuYUjQXP.js";import"./index-SbvGQsJp.js";import"./useFormValidation-Cwb3rUYJ.js";import"./useField-Vj9LyZT-.js";import"./Button-Bm_96dJ2.js";import"./Hidden-BVPjc43X.js";import"./useLabels-CZlpXa7M.js";import"./useButton-DXi2-Ij4.js";import"./search-BHk4Onkd.js";import"./createLucideIcon-NdGz0Ptw.js";import"./ClearButton-BcXrdV1n.js";import"./Button-D6mILSsj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XLs9F4JA.js";import"./VisuallyHidden-CruDu4Gn.js";import"./x-CWmj5Rac.js";import"./FieldError-_edkh_FM.js";import"./Text-4DZ9uLvx.js";import"./Text-vUmVOUpM.js";import"./RSPContexts-B8fjskTn.js";import"./Collection-CR_ONP3f.js";import"./index-DClodtP5.js";import"./DragAndDrop-d1Crg52e.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BL7yS6W5.js";import"./SelectionManager-CjhZccZY.js";import"./useEvent-oippFPIE.js";import"./useDescription-B7RZGwxx.js";import"./inertValue-BZritUBy.js";import"./useHighlightSelectionDescription-BLRX37qu.js";import"./useUpdateEffect-BEm6biyu.js";import"./ListKeyboardDelegate-CIBYFWRq.js";import"./useHasTabbableChild-Bl8OXUx8.js";import"./Checkbox-C8taor_O.js";import"./Form-D19yNL9c.js";import"./check-bkr22Hg3.js";import"./useToggleState-BGgRPG3e.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
