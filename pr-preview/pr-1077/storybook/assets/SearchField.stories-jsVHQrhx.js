import{r as m,f as l,j as t}from"./iframe-Dp43kgFY.js";import{S as d}from"./SearchField-DbdZdpTM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CjCkvmq0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DJq_g7YW.js";import"./utils-CQURC1dK.js";import"./useLocalizedStringFormatter-MZozDBHj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BU47s5IU.js";import"./useFocusRing-DuecCpf4.js";import"./index-l95OD-BB.js";import"./index-DdtjAW4o.js";import"./useFormValidation-B7nz_rt_.js";import"./useField-BlDlosfz.js";import"./Button-Bq7x_9-Y.js";import"./Hidden-ypOha8Sj.js";import"./useLabels-COsyDR1S.js";import"./useButton-D3tp8nbg.js";import"./search-BBHKdc89.js";import"./createLucideIcon-D72gX86M.js";import"./ClearButton-jZQlok3F.js";import"./Button-O1BOKm9x.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Co-CJ4tv.js";import"./VisuallyHidden-DkuOGL8E.js";import"./x-DGEzAbXD.js";import"./FieldError-fHEQddPz.js";import"./Text-CqEImv_2.js";import"./Text-Bo7dFu1i.js";import"./RSPContexts-ChoQx1hy.js";import"./Collection-D2xmrWHG.js";import"./index-B5mME82v.js";import"./DragAndDrop-DnPU_amI.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-oQR-g-8x.js";import"./SelectionManager-DtayW_nU.js";import"./useEvent-DT_nKyT3.js";import"./useDescription-CTRJEwnt.js";import"./inertValue-CUuvnDgD.js";import"./useHighlightSelectionDescription-zGWauYLg.js";import"./useUpdateEffect-BwARvU8J.js";import"./ListKeyboardDelegate-Cmq15C0M.js";import"./useHasTabbableChild-CR78PjY6.js";import"./Checkbox-D9r1QFFO.js";import"./Form-CLRQAu8w.js";import"./check-C_PYEOSU.js";import"./useToggleState-B1ToPzLo.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
