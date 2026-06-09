import{r as m,f as l,j as t}from"./iframe-6VRTlOeH.js";import{S as d}from"./SearchField-x8AC1trq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CpG3seDc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./Form-3fhL1Dx2.js";import"./useFocusRing-DGxSfNEF.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./Input-t6CEBuf7.js";import"./Hidden-DlTpFa-B.js";import"./Button-DLPX01E3.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./FieldError-BjyVB-H9.js";import"./Text-CpKvHOvq.js";import"./clsx-Ciqy0D92.js";import"./Text-BxBOqGEA.js";import"./RSPContexts-DRe_RyK6.js";import"./Group-BXWl5BNG.js";import"./useControlledState-pI_U9-IG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxYO2c75.js";import"./useField-2NJCbeT2.js";import"./TextField.module-DdivwlC8.js";import"./search-DIUl9xPj.js";import"./createLucideIcon-LiZfCQUd.js";import"./x-CG_c6zFF.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./Button-CQiZspsF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BKsZ0nD0.js";import"./Collection-TF1_6_sW.js";import"./index-M8MoRKxx.js";import"./DragAndDrop-CSz4WO9Y.js";import"./getScrollParent-HQ76BiU1.js";import"./scrollIntoView-BdAgwM8B.js";import"./SelectionIndicator-CCEQFu0T.js";import"./SelectionManager-CrHNXkN6.js";import"./useEvent-CA01mw1x.js";import"./useDescription-VsZXCutT.js";import"./inertValue-D0X9MpTx.js";import"./useHighlightSelectionDescription-CmsTaueR.js";import"./useUpdateEffect-DQolT4VD.js";import"./ListKeyboardDelegate-ZFjtCWQm.js";import"./useHasTabbableChild-BybRNQGU.js";import"./Checkbox-CRsNwclq.js";import"./check-GrQ7aBJH.js";import"./useToggleState-CJ8qU7CY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
