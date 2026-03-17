import{r as m,f as l,j as t}from"./iframe-ZeXYQ1RW.js";import{S as d}from"./SearchField-oAuIpKR-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CvJbpjVM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BI4OK_uN.js";import"./utils-DkAMXJPn.js";import"./useLocalizedStringFormatter-26LgWsvD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bd1NJOJF.js";import"./useFocusRing-B05DoKvO.js";import"./index-DbUHK1eY.js";import"./index-DDIUhUq_.js";import"./useFormValidation-CleU6jt7.js";import"./useField-CTy-1_Zz.js";import"./Button-B1pz6NZE.js";import"./Hidden-Cw1xIodo.js";import"./useLabels-CvN3rkoX.js";import"./useButton-CABxZnPk.js";import"./search-tiZTt0Qb.js";import"./createLucideIcon-NOl_qKmM.js";import"./ClearButton-CuvAcj86.js";import"./x-jvAHOITw.js";import"./Button-D_9dtB_J.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DB_PBhmZ.js";import"./VisuallyHidden-D_TH7fZb.js";import"./FieldError-Bowa5wqw.js";import"./Text-Dve1S3pg.js";import"./Text-DNs8wtir.js";import"./RSPContexts-ByHBnrKz.js";import"./Collection-Ck9H6G3Z.js";import"./index-CnOsB38m.js";import"./DragAndDrop-BI8a55sF.js";import"./getScrollParent-Dxv8a8bs.js";import"./scrollIntoView-DeVdbosm.js";import"./SelectionIndicator-DpH7GgiJ.js";import"./SelectionManager-BGiQ5DnI.js";import"./useEvent-CBzfijIc.js";import"./useDescription-B2YHcwj0.js";import"./inertValue-BRkHdiG2.js";import"./useHighlightSelectionDescription-CbqoaoFK.js";import"./useUpdateEffect-U3wXFl5Z.js";import"./ListKeyboardDelegate-BD0FshjV.js";import"./useHasTabbableChild-BdwvYV2L.js";import"./Checkbox-B9EHxwO4.js";import"./Form-Dy7AKgGH.js";import"./check-CnqCPZ1F.js";import"./useToggleState-Dy9P4wV5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
