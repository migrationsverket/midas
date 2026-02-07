import{r as m,f as l,j as t}from"./iframe-DAmvnAWM.js";import{S as d}from"./SearchField-CcIlbCX7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CQ0Op8FD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjmKk3Qz.js";import"./utils-DYzArhpk.js";import"./useLocalizedStringFormatter-B4UBrv2w.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEbz6k8C.js";import"./useFocusRing-QsJJnFOd.js";import"./index-smKRG6Ei.js";import"./index-iQgIb4dd.js";import"./useFormValidation-BCE_H7GP.js";import"./useField-3CFuHcV3.js";import"./Button-DrLU6fB6.js";import"./Hidden-BYI0l7bh.js";import"./useLabels-xfye1LU6.js";import"./useButton-DE9dKRCV.js";import"./search-CBkhFwZo.js";import"./createLucideIcon-BXDZxBO_.js";import"./ClearButton-C4l6DFZ-.js";import"./Button-CI9p286k.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtExqc3U.js";import"./VisuallyHidden-BneHcT7D.js";import"./x-BtpaJG07.js";import"./FieldError-CC3CownB.js";import"./Text-BHD5lpJL.js";import"./Text-CSZqV0cb.js";import"./RSPContexts-SFPpukGj.js";import"./Collection-C66Lj0rx.js";import"./index-Nu6RYaow.js";import"./DragAndDrop-DNItkLEq.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpfuH37l.js";import"./SelectionManager-B-T3Q6de.js";import"./useEvent-DfaC2w5t.js";import"./useDescription-CYqVIVXJ.js";import"./inertValue-CFmgLGRA.js";import"./useHighlightSelectionDescription-GymAZN2i.js";import"./useUpdateEffect-D4yQapjp.js";import"./ListKeyboardDelegate-DBzt-ToB.js";import"./useHasTabbableChild-CHm-4EAO.js";import"./Checkbox-DLeZsQYR.js";import"./Form-B1LrfJNY.js";import"./check-BJZQmyXj.js";import"./useToggleState-CwxmSBnv.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
