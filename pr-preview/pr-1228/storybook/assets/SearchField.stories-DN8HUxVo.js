import{r as m,f as l,j as t}from"./iframe-SiFgIgtO.js";import{S as d}from"./SearchField-D2oX3Dii.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CrMO9mDy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-o2Exi7SE.js";import"./clsx-B-dksMZM.js";import"./Form-DgSr2KFi.js";import"./useFocusRing-CvkTALop.js";import"./index-DSbiV_Yq.js";import"./index-C4sSyqsa.js";import"./Input-Dj69D4Wg.js";import"./Hidden-BczPpR5h.js";import"./Button-CIm-1svz.js";import"./useLabel-z_-c7Nf0.js";import"./useLabels-KeWp1COh.js";import"./useButton-B0oseYFB.js";import"./FieldError-BG5wZCkL.js";import"./Text-iLvdh7Qr.js";import"./clsx-Ciqy0D92.js";import"./Text-JI0YDy3v.js";import"./RSPContexts-DM50IAXa.js";import"./Group-DicU3rN6.js";import"./useControlledState-BeznzCuJ.js";import"./useLocalizedStringFormatter-BSIB72Kk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMD9JipH.js";import"./useField-BB23bqGH.js";import"./TextField.module-DdivwlC8.js";import"./search-y82T5kOw.js";import"./createLucideIcon-jPk5qvos.js";import"./x-ijd7sG5_.js";import"./useLocalizedStringFormatter-CsnzAfll.js";import"./Button-DBG0-mK7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrRKsR6_.js";import"./Collection-BRYmqSyD.js";import"./index-Dr-4T4ok.js";import"./DragAndDrop-s4cuduJD.js";import"./getScrollParent-BdyvFVIS.js";import"./scrollIntoView-bZNhA6RN.js";import"./SelectionIndicator-DqtZUbAc.js";import"./SelectionManager-B4l6dhqq.js";import"./useEvent-DvWnSKUG.js";import"./useDescription-CU7ZHwK3.js";import"./inertValue-BJGhfjjq.js";import"./useHighlightSelectionDescription-61Uub9U6.js";import"./useUpdateEffect--C_tgNEG.js";import"./ListKeyboardDelegate-Cal3wDht.js";import"./useHasTabbableChild-Bgpd9a9K.js";import"./Checkbox-L3SyxwzM.js";import"./check-Cg2VzzCN.js";import"./useToggleState-BFaaa6V4.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
