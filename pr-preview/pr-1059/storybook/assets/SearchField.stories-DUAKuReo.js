import{r as m,f as l,j as t}from"./iframe-C5a1BioU.js";import{S as d}from"./SearchField-XEy52hvX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DnTSCOtg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dc-egfuk.js";import"./utils-BKKhqGgZ.js";import"./useLocalizedStringFormatter-nY2oYBwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DcbiXo2q.js";import"./useFocusRing-CCvBuHoi.js";import"./index-DJjxifz8.js";import"./index-Cd0yh21x.js";import"./useFormValidation-cZ2U5Xpk.js";import"./useField-CmizDYFo.js";import"./Button-BcpwI67Q.js";import"./Hidden-BkRTM2tY.js";import"./useLabels-aRHkw2YO.js";import"./useButton-DQmD9itb.js";import"./search-Dow_W6Tx.js";import"./createLucideIcon-C3B2EhYD.js";import"./ClearButton-0jyVvHJD.js";import"./Button-BmzaM-yt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter--NJZCpI7.js";import"./VisuallyHidden-D-CrKNJu.js";import"./x-CgGKRg4Y.js";import"./FieldError-BHjSBbDT.js";import"./Text-Dsf7XnBX.js";import"./Text-CBM72llQ.js";import"./RSPContexts-Z4ebeqL_.js";import"./Collection-CLv5EMAY.js";import"./index-c6WcVRzH.js";import"./DragAndDrop-g8UMYqLG.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEZMMIsz.js";import"./SelectionManager-D_-IELdk.js";import"./useEvent-BljPOtQc.js";import"./useDescription-DdZRWQoe.js";import"./inertValue-DcSU-Hou.js";import"./useHighlightSelectionDescription-CkaFfIsD.js";import"./useUpdateEffect-Clqyan0-.js";import"./ListKeyboardDelegate-C1xkpV8e.js";import"./useHasTabbableChild-DsXrkynf.js";import"./Checkbox-8IA93_Sp.js";import"./Form-D6YdVmID.js";import"./check-Bjg92RUd.js";import"./useToggleState-Czq2ljtr.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
