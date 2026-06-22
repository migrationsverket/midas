import{r as m,f as l,j as t}from"./iframe-DcBIsMXx.js";import{S as d}from"./SearchField-DqB10teE.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BOLYIXjm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5byDKFfB.js";import"./clsx-B-dksMZM.js";import"./Form-BrIhRNhF.js";import"./useFocusRing-D5tG7NYb.js";import"./index-Ddy-ld7t.js";import"./index-lIHyJaf-.js";import"./Input-DybDWXr1.js";import"./Hidden-DR2geLuk.js";import"./Button-C4Q8xd0B.js";import"./useLabel-Cl4TFLpj.js";import"./useLabels-x1_Sa4GJ.js";import"./useButton-CpEr-C_f.js";import"./FieldError-CA3FiWjt.js";import"./Text-DAtPV-yE.js";import"./clsx-Ciqy0D92.js";import"./Text-C7WBWqxX.js";import"./RSPContexts-CEHus4Pd.js";import"./Group-BKaapwgt.js";import"./useControlledState-e6Gq9Qx5.js";import"./useLocalizedStringFormatter-BLQND9we.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BeWQ-UA7.js";import"./useField-wfnZ9XHu.js";import"./TextField.module-DdivwlC8.js";import"./search-D1xZJm3x.js";import"./createLucideIcon-D8sotqZ_.js";import"./x-B6Pe-CX-.js";import"./useLocalizedStringFormatter-RHrCy6F9.js";import"./Button-CFaNyWK_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ILsWu368.js";import"./Collection-D-yzekC7.js";import"./index-BJat-jgU.js";import"./DragAndDrop-C0znx_WV.js";import"./getScrollParent-DezxaSLv.js";import"./scrollIntoView-DRKUy1YW.js";import"./SelectionIndicator-DwdD_WnM.js";import"./SelectionManager-D5cCPk2g.js";import"./useEvent-B_qpFesj.js";import"./useDescription-C0VBBDaG.js";import"./inertValue-D28JHda2.js";import"./useHighlightSelectionDescription-BA2mUbhV.js";import"./useUpdateEffect-PhhB7rfK.js";import"./ListKeyboardDelegate-Ayo5OROx.js";import"./useHasTabbableChild-BTmHaYHi.js";import"./Checkbox-D07lcVzH.js";import"./check-Djn2wj-N.js";import"./useToggleState-DErLwSFu.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
