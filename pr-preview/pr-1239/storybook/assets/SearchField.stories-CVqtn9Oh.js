import{r as m,f as l,j as t}from"./iframe-DWjCTUGS.js";import{S as d}from"./SearchField-DU9e4lUK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Z-eOQJO4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-jft35r8I.js";import"./clsx-B-dksMZM.js";import"./Form-fTl9ZSRE.js";import"./useFocusRing-By5vzM2y.js";import"./index-CTzqJ3Ik.js";import"./index-BtJ79RpX.js";import"./Input-_7XqZgB0.js";import"./Hidden-Crg89ChB.js";import"./Button-C9b-TJtb.js";import"./useLabel-B9iBVSNe.js";import"./useLabels-DgKilVQM.js";import"./useButton-B_EIBBkv.js";import"./FieldError-B_RQwvpG.js";import"./Text-Dg63mXaz.js";import"./clsx-Ciqy0D92.js";import"./Text-eFe150r9.js";import"./RSPContexts-Csylolnc.js";import"./Group-DtXYA5qI.js";import"./useControlledState-CkptqhP6.js";import"./useLocalizedStringFormatter-BHhCUzn7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-HwJ_gv6h.js";import"./useField-76ZmfiRI.js";import"./TextField.module-DdivwlC8.js";import"./search-CtBBVvKE.js";import"./createLucideIcon-B9xTeaix.js";import"./x-BkZO3SMW.js";import"./useLocalizedStringFormatter-S9MQR21O.js";import"./Button-ClirsJfj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DBHrI_B7.js";import"./Collection-DjJ2m9zo.js";import"./index-4pgU1s_J.js";import"./DragAndDrop-D2ajgVFY.js";import"./getScrollParent-DwRJEpBB.js";import"./scrollIntoView-DUeHV5Vd.js";import"./SelectionIndicator-DfY4UXyG.js";import"./SelectionManager-0LynmnvR.js";import"./useEvent-Dr-0pueP.js";import"./useDescription-Da3_CYtm.js";import"./inertValue-izSROIxw.js";import"./useHighlightSelectionDescription-DZGCAKpj.js";import"./useUpdateEffect-B1ex9kdD.js";import"./ListKeyboardDelegate-C2orpyom.js";import"./useHasTabbableChild-DHwJrSNX.js";import"./Checkbox-CwMI3toy.js";import"./check-9kvzkp9q.js";import"./useToggleState-BUI9gasn.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
