import{r as m,f as l,j as t}from"./iframe-BWdkMAjO.js";import{S as d}from"./SearchField-m1vWyjsI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BjpbemeV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-tNlRhvlF.js";import"./utils-C4rGLdQa.js";import"./useLocalizedStringFormatter-CsTrlIxe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-nf_Kzrb7.js";import"./useFocusRing-Dz8KRmRs.js";import"./index-PBQ0q_wK.js";import"./index-B_yrj6ZN.js";import"./useFormValidation-BrlE7vQL.js";import"./useField-e6tcAxN2.js";import"./Button-DbXwylTQ.js";import"./Hidden-DoytNLvt.js";import"./useLabels-f4Sfov9b.js";import"./useButton-CRIQl1ZU.js";import"./search-B73IsSVy.js";import"./createLucideIcon-UbHQFer_.js";import"./ClearButton-BsImjjIx.js";import"./Button-VYBWmn37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B72kiSfm.js";import"./VisuallyHidden-DDe5r2jE.js";import"./x-CUMw8g3s.js";import"./FieldError-DicB1PMu.js";import"./Text-88YPWSN7.js";import"./Text-CClrU0hd.js";import"./RSPContexts-rbDLAAYz.js";import"./Collection-DjBZDB4X.js";import"./index-BsnagmWt.js";import"./DragAndDrop-BjiziexU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-yaVjFPo8.js";import"./SelectionManager-CHhr9Ilq.js";import"./useEvent--2GNkBiv.js";import"./useDescription-BWeYbpkJ.js";import"./inertValue-Bd_iQKf2.js";import"./useHighlightSelectionDescription-BSfrYaYS.js";import"./useUpdateEffect-ltpDZr1e.js";import"./ListKeyboardDelegate-CI7UBn65.js";import"./useHasTabbableChild-DH6ux-Lz.js";import"./Checkbox-D2KLpML_.js";import"./Form-kXl2BCfV.js";import"./check-CNRuk5pp.js";import"./useToggleState-B9gJvQm8.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
