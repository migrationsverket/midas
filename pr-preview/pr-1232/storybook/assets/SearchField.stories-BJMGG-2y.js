import{r as m,f as l,j as t}from"./iframe-DoRPDZ-n.js";import{S as d}from"./SearchField-BJPiLGjB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-MQTCWQ81.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BzVzQHtN.js";import"./clsx-B-dksMZM.js";import"./Form-CgjYIvc-.js";import"./useFocusRing-Cpj_6FFs.js";import"./index-BpvQun69.js";import"./index-dxvpTbK-.js";import"./Input-D2bjqTwX.js";import"./Hidden-Kgphbk6f.js";import"./Button-B0xwVoX4.js";import"./useLabel-D--L_qeT.js";import"./useLabels-6Au6pJO1.js";import"./useButton-C_Cxj7yi.js";import"./FieldError-DkiFq4VK.js";import"./Text-CSSrkUG7.js";import"./clsx-Ciqy0D92.js";import"./Text-BM5KdGqj.js";import"./RSPContexts-CIekAzAn.js";import"./Group-CRCDi-nQ.js";import"./useControlledState-Ddc7Cp2E.js";import"./useLocalizedStringFormatter-C5mreUQq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dsvjr3ci.js";import"./useField-JDSjT61z.js";import"./TextField.module-DdivwlC8.js";import"./search-QuYCyt3O.js";import"./createLucideIcon-CiSuNVkc.js";import"./x-BHilmKwO.js";import"./useLocalizedStringFormatter-Ckjeog25.js";import"./Button-qJNZwD8g.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bcu1ZANu.js";import"./Collection-CI7_yGGF.js";import"./index-BbB8zJUi.js";import"./DragAndDrop-DMR6Zlxj.js";import"./getScrollParent-D1g3Kg9R.js";import"./scrollIntoView-DAAp94bF.js";import"./SelectionIndicator-CKu1Q3Kp.js";import"./SelectionManager-D1n9ipqn.js";import"./useEvent-B1VSdZUj.js";import"./useDescription-B7wqrjVm.js";import"./inertValue-CPAdFzFR.js";import"./useHighlightSelectionDescription-BeGn2YgN.js";import"./useUpdateEffect-CzyQFJFh.js";import"./ListKeyboardDelegate-DRt0AA7q.js";import"./useHasTabbableChild-NS5n8fdb.js";import"./Checkbox-tTnf_dxV.js";import"./check-Kg5voycX.js";import"./useToggleState-DF7oPVk6.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
