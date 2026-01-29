import{r as m,f as l,j as t}from"./iframe-DFa3xMtH.js";import{S as d}from"./SearchField-S8nuZZv0.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ChlHey8z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DlMrxxrC.js";import"./utils-BcZWRu-T.js";import"./useLocalizedStringFormatter-D8vesOTf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOpYqqyG.js";import"./useFocusRing-DTF2LQQu.js";import"./index-14R2kEQz.js";import"./index-BImQHuZW.js";import"./useFormValidation-CZZHKzo3.js";import"./useField-ClGbo0E5.js";import"./Button-ocYHggw0.js";import"./Hidden-syp9xi-M.js";import"./useLabels-DTa4O1hk.js";import"./useButton-BkRX4biF.js";import"./search-DuPorX3F.js";import"./createLucideIcon-CG_uvONP.js";import"./ClearButton-B_X6EZtl.js";import"./Button-_PEtoZlZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BcKupi0h.js";import"./VisuallyHidden-BeIfbn57.js";import"./x-BuIg2Jvd.js";import"./FieldError-DDcEoLvd.js";import"./Text-BCIdAzOc.js";import"./Text-CLgVcmAF.js";import"./RSPContexts-DlObjR3U.js";import"./Collection-BkC_HYu3.js";import"./index-C2EOBSzk.js";import"./DragAndDrop-p2ewM28K.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BbaKMaGf.js";import"./SelectionManager-CTcSNJ1U.js";import"./useEvent-B4KRxCDO.js";import"./useDescription-C-peboUL.js";import"./inertValue-DlB13Arw.js";import"./useHighlightSelectionDescription-5ehX_Yu9.js";import"./useUpdateEffect-VOBWQqf8.js";import"./ListKeyboardDelegate--oOTktEO.js";import"./useHasTabbableChild-Dc8yKobQ.js";import"./Checkbox-CfzO9TyD.js";import"./Form-B9zhWkYb.js";import"./check-BcKmdbna.js";import"./useToggleState-CgZg35-q.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
