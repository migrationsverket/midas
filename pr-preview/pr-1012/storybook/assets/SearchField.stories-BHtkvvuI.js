import{r as m,f as l,j as t}from"./iframe-BEJN6Kxj.js";import{S as d}from"./SearchField-Dytv-glt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CnIh7nO4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CwdPjKis.js";import"./utils-CrGBDRkS.js";import"./useLocalizedStringFormatter-fztwDLIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGTvX6Si.js";import"./useFocusRing-eqCY1XUY.js";import"./index-D62Nhkqi.js";import"./index-h8IQGtJP.js";import"./useFormValidation-CzpRDG9-.js";import"./useField-DuaCTKKw.js";import"./Button-w6H2Sg3d.js";import"./Hidden-fVuPKruJ.js";import"./useLabels-NwX4Qgl6.js";import"./useButton-9wB6vFCI.js";import"./search-8_W5Jr3C.js";import"./createLucideIcon-DlFkL0lK.js";import"./ClearButton-BcxkrOVW.js";import"./Button-CStAPZI-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DmUmyjCk.js";import"./VisuallyHidden-du_qoG-V.js";import"./x-VDRCJe-m.js";import"./FieldError-DgfjuVzW.js";import"./Text-DxjUFe6b.js";import"./Text-Cz34VrmV.js";import"./RSPContexts-D9Aj9BI_.js";import"./Collection-C0zL_sAG.js";import"./index-RlhfcIpf.js";import"./DragAndDrop-BN9B-mA9.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DVtFm3e-.js";import"./SelectionManager-cZjLQm_r.js";import"./useEvent-CrvnL7jH.js";import"./useDescription-tLKe2g5W.js";import"./inertValue-C_IZdAhr.js";import"./useHighlightSelectionDescription-Bd2xCd4o.js";import"./useUpdateEffect-DM2mAhts.js";import"./ListKeyboardDelegate-pfwT5Ajx.js";import"./useHasTabbableChild-D39loQu1.js";import"./Checkbox-qBMYKazd.js";import"./Form-DfyEbNXE.js";import"./check-B8Bqt9So.js";import"./useToggleState-7dfebPpM.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
