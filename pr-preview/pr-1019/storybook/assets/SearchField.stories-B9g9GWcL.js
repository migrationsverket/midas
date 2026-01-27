import{r as m,f as l,j as t}from"./iframe-BBOYsnjU.js";import{S as d}from"./SearchField-CWareYKX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-V3_Ufrve.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQ0df-ju.js";import"./utils-j2mhf0J5.js";import"./useLocalizedStringFormatter-CDq5Lh88.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0widOB9.js";import"./useFocusRing-DZUzyHgy.js";import"./index-rPoChojA.js";import"./index-Cf35xK9l.js";import"./useFormValidation-D48nmeiZ.js";import"./useField-LYyOQXPm.js";import"./Button-DDjB2733.js";import"./Hidden-aOpMhQep.js";import"./useLabels-DQMV1_Yc.js";import"./useButton-Ftv_ctu3.js";import"./search-BYYdyhVd.js";import"./createLucideIcon-Ce2Qhn1H.js";import"./ClearButton-CnM_IuXT.js";import"./Button-CyQgtJ3P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1Kiw22P.js";import"./VisuallyHidden-CPK8rn6e.js";import"./x-Dqyc0lO4.js";import"./FieldError-DVSJgZFJ.js";import"./Text-CZBI6ZSH.js";import"./Text-DzOdr-51.js";import"./RSPContexts-D5OeRAAV.js";import"./Collection-CEBzJ_lA.js";import"./index-Dvfsc1lc.js";import"./DragAndDrop-Cf9WVW7t.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CusS6hE5.js";import"./SelectionManager-BlVi-ftI.js";import"./useEvent-BilFL-U7.js";import"./useDescription-C0eI7hlZ.js";import"./inertValue-ClsxHmnB.js";import"./useHighlightSelectionDescription-CiTKN3Z9.js";import"./useUpdateEffect-BgSzQoT1.js";import"./ListKeyboardDelegate-BMqGOvXO.js";import"./useHasTabbableChild-DWXwVCfR.js";import"./Checkbox-DTzEyyaj.js";import"./Form-CHLazgRg.js";import"./check-COwCm7m4.js";import"./useToggleState-D0fgWUNk.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
