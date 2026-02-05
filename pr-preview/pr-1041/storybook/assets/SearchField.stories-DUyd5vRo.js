import{r as m,f as l,j as t}from"./iframe-DQprq_kP.js";import{S as d}from"./SearchField-NFeInHWs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BAmGgm0y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-cwJwYt4X.js";import"./utils-CzYL7WyR.js";import"./useLocalizedStringFormatter-BzU75U7z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-j4hXddcD.js";import"./useFocusRing-BVbjxz3f.js";import"./index-Zi6SpqS6.js";import"./index-BkSkOuU3.js";import"./useFormValidation-Dn6RDdQ2.js";import"./useField-CfLWi5yw.js";import"./Button-DWUsuc72.js";import"./Hidden-BWrSuujl.js";import"./useLabels-ZvQNUnV5.js";import"./useButton-BnQ8yP1B.js";import"./search-CCoFpJFB.js";import"./createLucideIcon-DrbblNCp.js";import"./ClearButton-Dguuq_6W.js";import"./Button-BqlETkBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUsvZMK4.js";import"./VisuallyHidden-p948zCvh.js";import"./x-DU8z3NoO.js";import"./FieldError-Dp6D5HDL.js";import"./Text-DvwepU_B.js";import"./Text-BezPGlQS.js";import"./RSPContexts-BiHEw_SQ.js";import"./Collection-CcekytqK.js";import"./index-Cts5wTmE.js";import"./DragAndDrop-bLiSbvWB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-h3b0GmHJ.js";import"./SelectionManager-B1dinrhP.js";import"./useEvent-ZYXRQoQI.js";import"./useDescription-Biv56RfI.js";import"./inertValue-B3qEyeSY.js";import"./useHighlightSelectionDescription-BG8PXvqz.js";import"./useUpdateEffect-CEmO5J1E.js";import"./ListKeyboardDelegate-CY-jE1ru.js";import"./useHasTabbableChild-BSufI4nF.js";import"./Checkbox-C0XRNjK5.js";import"./Form-Dq0mzgBq.js";import"./check-DCkO_6z5.js";import"./useToggleState-BW3rGxKj.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
