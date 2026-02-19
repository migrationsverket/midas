import{r as m,f as l,j as t}from"./iframe-CyQ_Q7rG.js";import{S as d}from"./SearchField-Crt9b7cP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CNWxs56X.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-fHHUIill.js";import"./utils-BoW3E2H5.js";import"./useLocalizedStringFormatter-D7j2-V_a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D4-g9e6y.js";import"./useFocusRing-BQ-1QbEG.js";import"./index-CR1l2dC_.js";import"./index-DOUe2Txr.js";import"./useFormValidation-B0oDx7tm.js";import"./useField-BkpnFURk.js";import"./Button-CntAlnRy.js";import"./Hidden-CRjkj892.js";import"./number-DfkVkf0F.js";import"./useLabels-CGrF7Gz1.js";import"./useButton-DyeUmxt9.js";import"./search-8ZBSHBsE.js";import"./createLucideIcon-DGHBNn-o.js";import"./ClearButton-B2IfHpF7.js";import"./Button-BTfIzcvP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDxyTvCl.js";import"./VisuallyHidden-DBSUrbfY.js";import"./x-BDgCrCJo.js";import"./FieldError-CQXxDwPR.js";import"./Text-Dq2_g6JH.js";import"./Text-agLRoWzJ.js";import"./RSPContexts-BGLALdn-.js";import"./Collection-9Co2B5T4.js";import"./index-CBTRi50S.js";import"./DragAndDrop-B9G5vz7l.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CaTZmifC.js";import"./SelectionManager-Cnu2jLOl.js";import"./useEvent-CcBMeIPq.js";import"./useDescription-DuUNP3eU.js";import"./inertValue-Dqjst7qC.js";import"./useHighlightSelectionDescription-joQOUZ0B.js";import"./useUpdateEffect-Cnofm4hI.js";import"./ListKeyboardDelegate-cqpvQpUp.js";import"./useHasTabbableChild-WMpWqcQS.js";import"./Checkbox-eMjUhIXn.js";import"./Form-DbePOiZQ.js";import"./check-Bi5-7FOs.js";import"./useToggleState-BZhugqlE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
