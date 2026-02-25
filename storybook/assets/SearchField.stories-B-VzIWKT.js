import{r as m,f as l,j as t}from"./iframe--7ouzhCF.js";import{S as d}from"./SearchField-BgFVb-MG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-29ZJ0ctG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-WRN65Jvl.js";import"./utils-CCrPRXFd.js";import"./useLocalizedStringFormatter-BqAS8Gzt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkQlwemA.js";import"./useFocusRing-VMBdHrfo.js";import"./index-7GfLKj_c.js";import"./index-C-Az-PCO.js";import"./useFormValidation-CNRC9kel.js";import"./useField-IWBX-r2S.js";import"./Button-MMOZkiqP.js";import"./Hidden-DnK2cKnr.js";import"./useLabels-D2JG2NHF.js";import"./useButton-DUghFOmd.js";import"./search-BO_XoebC.js";import"./createLucideIcon-DMRXokTE.js";import"./ClearButton-D5Exhh2q.js";import"./Button-D_kviF_H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiDiFH31.js";import"./VisuallyHidden-DZP5hbvT.js";import"./x-ik0duNRE.js";import"./FieldError-C9fNdBcq.js";import"./Text-_ylAafRx.js";import"./Text-Dt6EjG80.js";import"./RSPContexts-CaPUaSms.js";import"./Collection-Drg-t8dC.js";import"./index-4Zg9c3TK.js";import"./DragAndDrop-DqJF2H_T.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgFJ4ky6.js";import"./SelectionManager-D7-uU-_9.js";import"./useEvent-BabVHB3y.js";import"./useDescription-XC1woF3d.js";import"./inertValue-bwIi_9sv.js";import"./useHighlightSelectionDescription-26g5-aNL.js";import"./useUpdateEffect-CoZ8eeUT.js";import"./ListKeyboardDelegate-D6v7un4s.js";import"./useHasTabbableChild-DOSuP5gb.js";import"./Checkbox-BZvhv2Qb.js";import"./Form-DACvBZcS.js";import"./check-B0IVbRVs.js";import"./useToggleState-BijhTd3x.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
