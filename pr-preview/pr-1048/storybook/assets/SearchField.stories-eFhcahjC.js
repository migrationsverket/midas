import{r as m,f as l,j as t}from"./iframe-BB7xjXo9.js";import{S as d}from"./SearchField-bX6xKmVD.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cdyh9K0i.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cfde8CUP.js";import"./utils-Dvy0y2aN.js";import"./useLocalizedStringFormatter-CVUyHfN-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D9jJj16b.js";import"./useFocusRing-CktrVIaE.js";import"./index-C09hS3mR.js";import"./index-B8nO0JsZ.js";import"./useFormValidation-DQxousKG.js";import"./useField-BdVdo0-E.js";import"./Button-BkFJO1eK.js";import"./Hidden-7SCFpwar.js";import"./number-DfkVkf0F.js";import"./useLabels-B4AtxOYQ.js";import"./useButton-Bm946jai.js";import"./search-DrmX6kGm.js";import"./createLucideIcon-3X7COU7u.js";import"./ClearButton-j_KJzjpI.js";import"./Button-C22OOxtQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-8KGrO3.js";import"./VisuallyHidden-CR7zfsA4.js";import"./x-Dc3uFHWe.js";import"./FieldError-DiGNmRuv.js";import"./Text-CLZT0tYL.js";import"./Text-CpUAtCa1.js";import"./RSPContexts-D2NFs19Y.js";import"./Collection-DNeu2an7.js";import"./index-BWQBBC6S.js";import"./DragAndDrop-C5rbG92B.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTX9bUP0.js";import"./SelectionManager-CyLtq4iJ.js";import"./useEvent-BMI0Onkw.js";import"./useDescription-Ct3uDuK8.js";import"./inertValue-BOhDx6Zk.js";import"./useHighlightSelectionDescription-BTkg5pdy.js";import"./useUpdateEffect-CFbfYyJZ.js";import"./ListKeyboardDelegate-DihKRIfe.js";import"./useHasTabbableChild-Ddq0yJuL.js";import"./Checkbox-Dj2a_83T.js";import"./Form-B-Za89Dc.js";import"./check-Ctl5eiDY.js";import"./useToggleState-B6EvRaQb.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
