import{r as m,f as l,j as t}from"./iframe-DQ8MWDzl.js";import{S as d}from"./SearchField-DkRgC-LI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BZSier0G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DLe-crj8.js";import"./utils-MUondYLm.js";import"./useLocalizedStringFormatter-CfUu-qj4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B054hSp-.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./useFormValidation-DoUO8THk.js";import"./useField--phBsH06.js";import"./Button-C6oyl_qC.js";import"./Hidden-BFm8JVh5.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./search-DvFRBW_y.js";import"./createLucideIcon-BgRpLVeX.js";import"./ClearButton-h1qHyDPN.js";import"./Button-lMIcCMmO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DopWcpGf.js";import"./VisuallyHidden-CYOdgqsq.js";import"./x-B_gkLLTD.js";import"./FieldError-BbsiMUDV.js";import"./Text-B7FL6X4L.js";import"./Text-DZRYbZpm.js";import"./RSPContexts-DuvxmCvc.js";import"./Collection-CHWjj3pz.js";import"./index-BiiJUMlY.js";import"./DragAndDrop-CdbQpsBP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-I5GQXWq9.js";import"./SelectionManager--WVYRdwt.js";import"./useEvent-LiCRS7cz.js";import"./useDescription-DlClEnzw.js";import"./inertValue-BpBmo_ir.js";import"./useHighlightSelectionDescription-Bz2_eHeW.js";import"./useUpdateEffect-CPnIGhVH.js";import"./ListKeyboardDelegate-JeH3KL6j.js";import"./useHasTabbableChild-DZkCqXg5.js";import"./Checkbox-BTkCb0MC.js";import"./Form-CbJ9UDZ3.js";import"./check-CeaqFALW.js";import"./useToggleState-DVPLAu_I.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
